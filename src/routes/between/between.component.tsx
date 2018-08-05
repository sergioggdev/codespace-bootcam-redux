// Import libraries
import * as React from 'react';
const { Component } = React;

// Import global resources
import { App } from '@Routes';

// Import local resources
import { Props } from './between.types';

/**
 * @class Between
 * @description
 */

export class Between extends Component<Props> {
  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}
