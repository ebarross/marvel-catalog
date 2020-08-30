/* eslint-disable @typescript-eslint/no-explicit-any */
export type HttpMethod = 'POST' | 'GET' | 'PUT' | 'DELETE';

export type HttpQuery = {
  name: string;
  value: string;
};

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: any;
  headers?: any;
  queries?: HttpQuery[];
};

export enum HttpStatusCode {
  OK = 200,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  body?: T;
};
