import axios, { AxiosResponse } from 'axios';
import { HttpRequest, HttpResponse } from '../../data/http/client';

const API_URL = 'https://gateway.marvel.com:443/v1/public';
const API_KEY = '816d5731d006897abf3608866d6aa40e';

export default {
  request: async (data: HttpRequest): Promise<HttpResponse> => {
    let axiosResponse: AxiosResponse;

    const baseUrl = `${API_URL}${data.url}`;
    const searchParams = new URLSearchParams();
    searchParams.append('apikey', API_KEY);
    searchParams.append('format', 'comic');
    searchParams.append('limit', '10');

    data.queries?.forEach((q) => {
      searchParams.append(q.name, q.value);
    });

    try {
      axiosResponse = await axios.request({
        url: `${baseUrl}?${searchParams}`,
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
