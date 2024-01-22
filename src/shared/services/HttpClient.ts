/* eslint-disable max-classes-per-file */
import axios from "axios"
import HttpResponse from "./HttpResponse"
import HttpError from "./HttpError";


export abstract class HttpClient {
  abstract get(url: string): Promise<HttpResponse>;

  abstract post(url: string, data?: any): Promise<HttpResponse>;

  static isHttpClientError(error: any): error is HttpError {
    if (error instanceof HttpError) return true;

    return false;
  }
}

export class HttpClientImpl implements HttpClient {
  constructor(private readonly httpLibrary: typeof axios) { }

  async get(url: string): Promise<HttpResponse> {

    try {
      const response = await this.httpLibrary.get(url);
      return new HttpResponse(response.data, response.status, response.statusText);
    } catch (err) {

      if (this.httpLibrary.isAxiosError(err)) {
        throw new HttpError(err.message)
      }

      throw err;
    }
  }

  async post(url: string, data?: any): Promise<HttpResponse> {

    try {
      const response = await this.httpLibrary.post(url, data);
      return new HttpResponse(response.data, response.status, response.statusText);
    } catch (err) {

      if (this.httpLibrary.isAxiosError(err)) {
        throw new HttpError(err.message)
      }

      throw err;
    }
  }
}

