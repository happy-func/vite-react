import '@/app.scss';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import store from '@/store';

import App from './App';

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        closeOnClick
        pauseOnFocusLoss
      />
    </Provider>
  </>,
  document.getElementById('root'),
);
