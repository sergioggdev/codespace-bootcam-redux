import { combineReducers } from 'redux';
import { State, Action } from '@Models';
import { RootStateTypes, rootReducer } from './root';
import { AsyncStateTypes, asyncReducer } from './async';

export { RootStateTypes, AsyncStateTypes };
export const allReducers = combineReducers<State, Action>({ rootReducer, asyncReducer });
