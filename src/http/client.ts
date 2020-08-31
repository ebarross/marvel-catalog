import { AxiosResponse } from 'axios';
import config from '../config';
import { HttpRequest, HttpResponse } from '../interfaces/http';
import axios from './axios';

export default {
  request: async (data: HttpRequest): Promise<HttpResponse> => {
    let axiosResponse: AxiosResponse;

    const searchParams = new URLSearchParams();
    searchParams.append('apikey', config.apiKey);
    searchParams.append('format', 'comic');
    searchParams.append('limit', '10');

    data.queries?.forEach((q) => {
      searchParams.append(q.name, q.value);
    });

    try {
      axiosResponse = await axios.request({
        url: `${data.url}?${searchParams}`,
        method: data.method,
        data: data.body,
        headers: data.headers,
      });
    } catch (error) {
      axiosResponse = error.response;
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  },
};
