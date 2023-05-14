import React from 'react';
import logo from '../assets/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/base.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          Coucou, voilà du texte supplémentaire :) :S
          BEEP, BEEP !
          BOOP !
          This should do it !
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
  );
}

export default App;
