import { RootStateTypes, ChiefOfDayStateTypes } from '@Models';

export type State = {
  readonly rootReducer: RootStateTypes;
  readonly chiefOfDayReducer: ChiefOfDayStateTypes;
};
