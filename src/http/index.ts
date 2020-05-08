import isUndefined from '../isUndefined';

/* eslint-disable @typescript-eslint/no-explicit-any */
class HttpClient {
  private baseUrl: string;

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async get(url: string): Promise<any> {
    const response = await fetch(this.createUrl(url), this.createRequest('GET'));

    return await response.json();
  }

  public async post(url: string, data?: any): Promise<Response> {
    return await fetch(this.createUrl(url), this.createRequest('POST', data));
  }

  public async delete(url: string): Promise<string> {
    const response = await fetch(this.createUrl(url), this.createRequest('DELETE'));

    return await response.text();
  }

  private createUrl(url: string): string {
    const fullUrl = `${this.baseUrl}/${url}`;
    return fullUrl.replace(/([^:]\/)\/+/g, '$1');
  }

  private createRequest(method: string, data?: any): RequestInit {
    const request: RequestInit = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      body: isUndefined(data) ? undefined : JSON.stringify(data),
    };
    return request;
  }
}

export default HttpClient;
