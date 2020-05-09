import { HttpClient } from '.';

const serviceUrl = 'http://localhost';
const testClient = new HttpClient(serviceUrl);

describe('http', () => {
  const mockFetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      text: () => Promise.resolve('Successful!'),
      json: () =>
        Promise.resolve({
          data: '12345',
        }),
    })
  );
  window.fetch = mockFetch;
  localStorage.setItem('access_token', 'token-1234');

  it('get returns json response', async () => {
    const response = await testClient.get('api/v1/statistics');
    expect(response.data).toEqual('12345');
    expect(mockFetch.mock.calls[0][0]).toBe(`${serviceUrl}/api/v1/statistics`);
    expect(mockFetch.mock.calls[0][1].headers.Authorization).toBe(`Bearer ${localStorage.getItem('access_token')}`);
  });

  it('post returns response', async () => {
    const response = await testClient.post('api/v1/add-sms', {
      data: 'test',
    });
    expect(response.ok).toBeTruthy();
    expect(await response.text()).toBe('Successful!');
    expect(mockFetch.mock.calls[1][0]).toBe(`${serviceUrl}/api/v1/add-sms`);
    expect(mockFetch.mock.calls[1][1].headers.Authorization).toBe(`Bearer ${localStorage.getItem('access_token')}`);
  });

  it('delete returns response', async () => {
    const response = await testClient.delete('api/v1/students/1');
    expect(response).toBe('Successful!');
    expect(mockFetch.mock.calls[2][0]).toBe(`${serviceUrl}/api/v1/students/1`);
    expect(mockFetch.mock.calls[2][1].headers.Authorization).toBe(`Bearer ${localStorage.getItem('access_token')}`);
  });
});
