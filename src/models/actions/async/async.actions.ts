import { AddActionGenerator, DeleteActionGenerator } from './async.types';

export const addAction: AddActionGenerator = payload => ({ payload, type: 'ADD_PRODUCT' });
export const deleteAction: DeleteActionGenerator = payload => ({ payload, type: 'DELETE_PRODUCT' });

function increment() {
  return {
    type: INCREMENT_COUNTER,
  };
}

function incrementAsync() {
  return dispatch => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(res => {
        dispatch(increment(res));
      })
      .catch(err => {
        dispatch(error(err));
      });
  };
}
