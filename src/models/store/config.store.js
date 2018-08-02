// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { createLogger } from 'redux-logger';
import { allReducers } from '@Models';

// const logger = createLogger({
//   collapsed: true,
// });
// const middleware = composeWithDevTools(applyMiddleware(logger));

const store = createStore(allReducers, {}, null);
export const Store = store;
