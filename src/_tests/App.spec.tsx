import { jsx } from '@emotion/react';
import React, { StrictMode } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';

import { setUpStore } from '@/store';
import { createHandlers } from '@/_mocks/handlers';

import App from '../App';

import { mswTestServer } from './__setup__';

function setUpApp() {
  mswTestServer.use(...createHandlers());
  const store = setUpStore();

  render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
}

describe('App test', () => {
  it('Loads a project without fake timers', async () => {
    // [SETUP] - set up app
    setUpApp();

    // [ASSERT] - eventually loads projects
    screen.getByText(/projects:/i);
    await screen.findByText(/Successfully fetched projects!/i);
    await screen.findByText(/2021-04-01/i);
  });

  it('Loads a project with jest fake timers', async () => {
    jest.useFakeTimers();
    // [SETUP] - set up app
    setUpApp();

    // [ASSERT] - eventually loads projects
    screen.getByText(/projects:/i);
    await screen.findByText(/Successfully fetched projects!/i);
    await screen.findByText(/2021-04-01/i);
  });
});
