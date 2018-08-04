// Import libraries
import * as React from 'react';
const { Component } = React;

// Import global resources
import { cart } from '@Assets';

// Import local resources
import { Props } from './cart.types';
import { Container, Image, CartBox, CartArea } from './cart.styled';

/**
 * @class Cart
 * @description Area para el carrito de compra
 */
export class Cart extends Component<Props> {
  render() {
    return (
      <Container>
        <Image src={cart} />
        <CartArea className="cart">
          <CartBox>
            <p>Producto1</p>
          </CartBox>
        </CartArea>
      </Container>
    );
  }
}
