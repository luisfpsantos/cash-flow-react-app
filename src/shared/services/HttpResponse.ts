export default class HttpResponse {
  constructor(readonly data: any, readonly statusCode: number, readonly statusText?: string) { }
}