
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import './index.css';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);
registerServiceWorker();
