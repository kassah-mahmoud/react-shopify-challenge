import React from 'react';
import MoviesProvider from './store/MoviesProvider';

function App() {
  return (
    <MoviesProvider>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </MoviesProvider>
  );
}

export default App;
