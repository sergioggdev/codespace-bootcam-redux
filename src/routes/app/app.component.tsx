// Import libraries
import * as React from 'react';
const { PureComponent } = React;

// Import global resources
import { logo } from '@Assets';
import { Product, Cart } from '@Components';

// Import local resources
import { Props, Products } from './app.types';
import { containerComponent } from './app.decorator';
import { Image, Container, SubContainer, Text, Title } from './app.styled';

/**
 * @class App
 * @description Componente principal
 */
@containerComponent
export class App extends PureComponent<Props> {
  state = {
    products: [],
  };

  componentDidMount() {
    if (this.props.getProduct) this.props.getProduct();
  }

  render() {
    const { products } = this.props;
    return (
      <Container>
        <Image src={logo} />
        <Title>CodeSpace Shop</Title>
        <Text>La tienda donde podras comprar a tus profesores favoritos</Text>
        <SubContainer>
          {products ? products.map((i: Products) => <Product key={i.id} data={i} />) : null}
        </SubContainer>
        <Cart />
      </Container>
    );
  }
}
