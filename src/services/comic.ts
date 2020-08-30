import { HttpStatusCode } from '../data/http/client';
import { Comic } from '../data/models/comic';
import HttpClient from '../infra/http/client';

export const loadAll = async (): Promise<Comic[]> => {
  const response = await HttpClient.request({
    url: '/comics',
    method: 'GET',
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
  // const comics = response.body.data?.results || [];

  switch (response.statusCode) {
    case HttpStatusCode.OK:
      return comics;
    default:
      throw new Error(response.body.message);
  }
};
