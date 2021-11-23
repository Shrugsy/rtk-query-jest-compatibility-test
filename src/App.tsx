/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React from 'react';

import './App.css';
import { ProjectDisplay } from './ProjectDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p
          css={css`
            color: yellow;
          `}
        >
          Hello Vite + React!
        </p>
        <ProjectDisplay />
      </header>
    </div>
  );
}

export default App;
