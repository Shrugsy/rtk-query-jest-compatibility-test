import { setupServer } from 'msw/node';

// eslint-disable-next-line
const nodeFetch = require('node-fetch');

if (!globalThis.fetch) {
  globalThis.fetch = nodeFetch;
  globalThis.Headers = nodeFetch.Headers;
  globalThis.Request = nodeFetch.Request;
  globalThis.Response = nodeFetch.Response;
}

// leave registering handlers up to individual tests
export const mswTestServer = setupServer();

beforeAll(() => {
  mswTestServer.listen();
});

afterEach(() => {
  mswTestServer.resetHandlers();
});

afterAll(() => {
  mswTestServer.close();
});
