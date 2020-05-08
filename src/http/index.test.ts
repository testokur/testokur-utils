import HttpClient from '.';

const serviceUrl = 'http://localhost/';
const testClient = new HttpClient(serviceUrl);

describe('http', () => {
  it('get returns json response', async () => {
    const mockFetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            data: '12345',
          }),
      })
    );
    window.fetch = mockFetch;
    localStorage.setItem('access_token', 'token-1234');

    const response = await testClient.get('api/v1/statistics');
    expect(response.data).toEqual('12345');
    expect(mockFetch.mock.calls[0][0]).toBe(`${serviceUrl}/api/v1/statistics`);
    expect(mockFetch.mock.calls[0][1].headers.Authorization).toBe(`Bearer ${localStorage.getItem('access_token')}`);
  });
});
