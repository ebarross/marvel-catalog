import { AxiosResponse } from 'axios';
import { HttpRequest, HttpResponse } from '../../data/http/client';
import axios from './axios';

const apiKey = process.env.REACT_APP_API_KEY || '';

export default {
  request: async (data: HttpRequest): Promise<HttpResponse> => {
    let axiosResponse: AxiosResponse;

    const searchParams = new URLSearchParams();
    searchParams.append('apikey', apiKey);
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
