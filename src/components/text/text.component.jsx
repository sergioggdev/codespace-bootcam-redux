// Import libraries
import React, { Component } from 'react';
// import { connect } from 'react-redux';

///////////// Component ////////////////
export class Text extends Component {
  render() {
    return (
      <div>
        <span>Bootcamp Codespace</span>
        {/* <span>{this.props.text}</span> */}
      </div>
    );
  }
}

// Añade el estado a las propiedades del componente.
// const mapsStateToProps = state => ({
//   text: state.rootReducer.text,
// });

// exportamos un nuevo componente con las nuevas propiedades de redux.
// export const TextConnect = connect(mapsStateToProps)(Text);
