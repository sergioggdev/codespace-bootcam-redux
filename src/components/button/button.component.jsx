// Import libraries
import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

// Import global resources
// import { changeAction } from '@Models';

// Import local resources
import styles from './button.styles.css';

///////////// Component ////////////////
export class Button extends Component {
  render() {
    return (
      <a
        onClick={() => console.log('Click') /*this.props.changeAction('Hola Clase!')*/}
        className={styles.button}>
        {this.props.children}
      </a>
    );
  }
}

// Añade el estado a las propiedades del componente.
// const mapsStateToProps = state => ({});

// Añade los lanzadores de acciones a las propiedades del componente.
// const mapDispatchToProps = dispatch => ({
//   changeAction: payload => dispatch({ payload, type: 'CHANGE_TEXT' }),
//   // Other ways to do it
//   // bindActionCreators({ changeAction }, dispatch);
// });

// exportamos un nuevo componente con las nuevas propiedades de redux.
// export const ButtonConnect = connect(
//   mapsStateToProps,
//   mapDispatchToProps,
// )(Button);
