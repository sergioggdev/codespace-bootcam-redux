import { initialRootState as initial } from './root.state';
import { RootStateTypes as State } from './root.types';
import { Action } from '@Models';

export function rootReducer(state: State = initial, action: Action): State {}
