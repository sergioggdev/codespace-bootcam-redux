import { initialRootState as initial } from './root.state';
import { RootStateTypes as State } from './root.types';
import { Action } from '@Models';

export function rootReducer(state: State = initial, action: Action): State {
  switch (action.type) {
    case 'ADD_PRODUCT':
      if (state.cart.some(i => i.id === action.payload.id)) {
        return {
          ...state,
          cart: state.cart.map(i => {
            if (i.id === action.payload.id) {
              i.quantity++;
              return i;
            }
            return i;
          }),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        cart: state.cart.filter(i => i.id !== action.payload.id),
      };
    default:
      return state;
  }
}
