/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpQuery, HttpStatusCode } from '../data/http/client';
import { Comic } from '../data/models/comic';
import HttpClient from '../infra/http/client';

type FilterQueries = {
  name?: string;
  page?: number;
};

type ComicsResponse = {
  comics: Comic[];
  total: number;
};

export default {
  loadAll: async (filterQueries: FilterQueries): Promise<ComicsResponse> => {
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
          image: `${result.thumbnail.path}.${result.thumbnail.extension}`,
          authors: result.creators.items.map((c: any) => ({
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
        throw new Error(response.body.message);
    }
  },
};
