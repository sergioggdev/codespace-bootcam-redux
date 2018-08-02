// Import libraries
import React, { Component } from 'react';
// import { Provider } from 'react-redux';

// Import global resources
// import { Store } from '@Models';
import { logo } from '@Assets';
import { Text, TextConnect, Button, ButtonConnect } from '@Components';

// Import local resources
import styles from './router.styles.css';

///////////// Component ////////////////
export class Router extends Component {
  handdleStore = () => {
    console.log('Click ver store');
    // console.log(Store.getState());
  };

  handdleDispatch = () => {
    console.log('Click Lanzar accion');
    // Store.dispatch({ payload: 'Hola Clase!', type: 'CHANGE_TEXT' });
  };

  render() {
    // Store.subscribe(() => {
    //   // console.log('el store cambia');
    //   // console.log(Store.getState());
    // });

    return (
      // <Provider store={Store}>
      <div className={styles.container}>
        <img src={logo} className={styles.image} />
        <h1 className={styles.title}>Bootcamp CodeSpace - Redux</h1>
        <div className={styles.subContainer}>
          <a onClick={this.handdleStore} className={styles.button}>
            Ver el Store
          </a>
          <a onClick={this.handdleDispatch} className={styles.button}>
            Lanzar Acción
          </a>
          {/* <Button>Lanzar Acción</Button> */}
          {/* <ButtonConnect>Lanzar Acción</ButtonConnect> */}
        </div>
        <div className={styles.text}>
          <Text />
          {/* <TextConnect /> */}
        </div>
      </div>
      // </Provider>
    );
  }
}
