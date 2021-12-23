import React from 'react';
import { render } from 'react-dom';
import Main from './Main';

const root = document.querySelector('#root');

render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  root,
);
