import { getErrorGenerator, getSuccessGenerator } from './async.types';

const getProductSuccess: getSuccessGenerator = payload => ({ payload, type: 'PRODUCT_SUCCESS' });
const getProductError: getErrorGenerator = payload => ({ payload, type: 'PRODUCT_ERROR' });

export const getProduct = () => dispatch => {
  fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(res => {
      dispatch(getProductSuccess(res));
    })
    .catch(err => {
      dispatch(getProductError(err));
    });
};
