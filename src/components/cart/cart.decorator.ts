// import { Dispatch, bindActionCreators } from 'redux';
import { ComponentType } from 'react';
import { connect } from 'react-redux';

import { State } from '@Models';

// Config default Props
const defaultProps = {};

// Add Redux State to Component props
const mapsStateToProps = (state: State) => ({
  ping: state.rootReducer.ping,
});

// Add Redux dispatch to Component props
// const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({}, dispatch);

// Export Decorator for extend the Component
export function containerComponent(constructor: ComponentType<any>) {
  constructor.defaultProps = defaultProps;
  return connect(
    mapsStateToProps,
    {},
  )(constructor);
}
