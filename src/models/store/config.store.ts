import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { allReducers } from '@Models';

const logger = createLogger({ collapsed: true });
const middleware = composeWithDevTools(applyMiddleware(logger, reduxThunk));

const store = {}; // Create the store

if (module.hot) {
  module.hot.accept(() => {
    const nextRootReducer = require('../reducers/index').allReducers;
    store.replaceReducer(nextRootReducer);
  });
}

export const Store = store;
