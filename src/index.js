import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './scss/index.scss';
import App from './App';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from '@shopify/polaris';
import en from '@shopify/polaris/locales/en.json';
import "@shopify/polaris/dist/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <AppProvider i18n={en} theme={{ colorScheme: "light" }}><App /></AppProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
