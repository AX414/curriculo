import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/pages/App';
import reportWebVitals from './reportWebVitals';
import wall from './assets/image/wall.jpg';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-weight: lighter;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100dvh;
    background-color: #0a1017;
    overflow-x: hidden;
    position: relative;
  }

  body::after {
    content: "";
    background: url('${wall}') no-repeat center center fixed;
    background-size: cover;
    opacity: 0.5;
    position: absolute;
    inset: 0;
    z-index: -1;
    filter: blur(2px);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  li {
    list-style: none;
  }

  @media (orientation: portrait) {
    body {
      font-size: 95%;
    }
  }

  @media (orientation: landscape) {
    body {
      font-size: 100%;
    }
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
