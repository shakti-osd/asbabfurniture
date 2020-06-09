import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.MIDDLE,
  timeout: 2000,
  type: 'success',
  // you can also just use 'scale'
  transition: transitions.FADE,
  containerStyle: {
    size: '500px',
    containerWidth: '400px',
    width: '100%'
  }
}

ReactDOM.render(
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
	     <App />
	   </AlertProvider>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
