import { ComponentType } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { State, deleteAction } from '@Models';

// Config default Props
const defaultProps = {};

// Add Redux State to Component props
const mapsStateToProps = (state: State) => ({
  cart: state.rootReducer.cart,
});

// Add Redux dispatch to Component props
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ deleteAction }, dispatch);

// Export Decorator for extend the Component
export function containerComponent(constructor: ComponentType<any>) {
  constructor.defaultProps = defaultProps;
  return <any>connect(
    mapsStateToProps,
    mapDispatchToProps,
  )(constructor);
}
