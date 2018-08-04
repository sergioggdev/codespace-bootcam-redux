import { combineReducers } from 'redux';
import { State, Action } from '@Models';
import { RootStateTypes, rootReducer } from './root';
import {} from './async';

export { RootStateTypes };
export const allReducers = combineReducers<State, Action>({ rootReducer });
