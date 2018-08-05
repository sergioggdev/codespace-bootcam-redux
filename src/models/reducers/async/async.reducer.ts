import { initialAsyncState as initial } from './async.state';
import { AsyncStateTypes as State } from './async.types';
import { Action } from '@Models';

export function asyncReducer(state: State = initial, action: Action): State {
  switch (action.type) {
    case 'PRODUCT_SUCCESS':
      return {
        ...state,
        products: action.payload,
        productsError: null,
      };
    case 'PRODUCT_ERROR':
      return {
        ...state,
        products: [],
        productsError: action.payload,
      };
    default:
      return state;
  }
}
