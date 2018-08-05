import { RootStateTypes, AsyncStateTypes } from '@Models';

export type State = {
  readonly rootReducer: RootStateTypes;
  readonly asyncReducer: AsyncStateTypes;
};
