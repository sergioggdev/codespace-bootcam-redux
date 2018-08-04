import { AddActionGenerator, DeleteActionGenerator } from './root.types';

export const addAction: AddActionGenerator = payload => ({ payload, type: 'ADD_PRODUCT' });
export const deleteAction: DeleteActionGenerator = payload => ({ payload, type: 'DELETE_PRODUCT' });
