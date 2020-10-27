import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

setInterval(() => {
  ReactDOM.render(
    <App />,
  document.getElementById('root')
);
}, 1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
