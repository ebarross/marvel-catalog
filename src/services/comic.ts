/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpClient from '../http/client';
import { Comic } from '../interfaces/comic';
import { HttpQuery, HttpStatusCode } from '../interfaces/http';
import { ResourceNotFoundError, UnexpectedError } from '../errors';

type FilterQueries = {
  name?: string;
  page?: number;
};

type ComicsResponse = {
  comics: Comic[];
  total: number;
};

export default {
  getAll: async (filterQueries: FilterQueries): Promise<ComicsResponse> => {
    const queries: HttpQuery[] = [];

    if (filterQueries.name) {
      queries.push({
        name: 'titleStartsWith',
        value: filterQueries.name,
      });
    }
    if (filterQueries.page) {
      queries.push({
        name: 'offset',
        value: String(filterQueries.page - 1),
      });
    }

    const response = await HttpClient.request({
      url: '/comics',
      method: 'GET',
      queries,
    });

    let comics: Comic[] = [];
    if (response.body.data?.results) {
      comics = response.body.data.results.map((result: any) => {
        return {
          id: result.id,
          title: result.title,
          description: result.description,
          image: `${result.thumbnail.path}.${result.thumbnail.extension}`,
          saleDate: result.dates[0].date.split('T')[0],
          creators: result.creators.items.map((c: any) => ({
            name: c.name,
            role: c.role,
          })),
        };
      });
    }

    switch (response.statusCode) {
      case HttpStatusCode.OK:
        return {
          comics,
          total: response.body.data.total,
        };
      default:
        throw new UnexpectedError();
    }
  },
  getById: async (id: string): Promise<Comic> => {
    const response = await HttpClient.request({
      url: `/comics/${id}`,
      method: 'GET',
    });

    if (response.statusCode === HttpStatusCode.OK) {
      const [result] = response.body.data.results;
      const comic: Comic = {
        id: result.id,
        title: result.title,
        description: result.description,
        image: `${result.thumbnail.path}.${result.thumbnail.extension}`,
        saleDate: result.dates[0].date.split('T')[0],
        creators: result.creators.items.map((c: any) => ({
          name: c.name,
          role: c.role,
        })),
      };
      return comic;
    }

    if (response.statusCode === HttpStatusCode.NOT_FOUND) {
      throw new ResourceNotFoundError('Comic');
    }

    throw new UnexpectedError();
  },
};
