// Import libraries
import * as React from 'react';
const { Component } = React;

// Import global resources
import { cart } from '@Assets';

// Import local resources
import { Props } from './cart.types';
import { containerComponent } from './cart.decorator';
import {
  Container,
  Image,
  CartBox,
  CartArea,
  BoxMiniCart,
  MiniImg,
  MiniTxt,
  MiniCloseArea,
  MiniDataArea,
  Link,
} from './cart.styled';

/**
 * @class Cart
 * @description Area para el carrito de compra
 */
@containerComponent
export class Cart extends Component<Props> {
  handdleClick = data => () => {
    this.props.deleteAction({ id: data.id });
  };

  render() {
    return (
      <Container>
        <Image src={cart} />
        <CartArea className="cart">
          <CartBox>
            {this.props.cart.map(i => (
              <BoxMiniCart key={i.id}>
                <MiniImg src={`http://localhost:3000${i.image}`} />
                <MiniDataArea>
                  <MiniTxt>{i.name}</MiniTxt>
                  <MiniTxt bold>
                    {i.price}
                    {i.quantity > 1 ? ` x${i.quantity}` : null}
                  </MiniTxt>
                </MiniDataArea>
                <MiniCloseArea>
                  <Link onClick={this.handdleClick(i)}>X</Link>
                </MiniCloseArea>
              </BoxMiniCart>
            ))}
          </CartBox>
        </CartArea>
      </Container>
    );
  }
}
