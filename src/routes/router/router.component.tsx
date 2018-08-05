// Import libraries
import * as React from 'react';
import { Provider } from 'react-redux';
const { Component } = React;

// Import global resources
import { Store } from '@Models';
import { Between } from '@Routes';

// Import local resources
import { Props } from './router.types';

/**
 * @class Router
 * @description Componente del router principal
 */

export class Router extends Component<Props> {
  render() {
    return (
      <Provider store={Store}>
        <Between />
      </Provider>
    );
  }
}
