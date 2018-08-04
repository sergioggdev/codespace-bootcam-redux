// Import libraries
import * as React from 'react';
import { Provider } from 'react-redux';
const { PureComponent } = React;

// Import global resources
import { logo } from '@Assets';
import { Store } from '@Models';
import { Product, Cart } from '@Components';

// Import local resources
import { Props, Products } from './router.types';
import { Image, Container, SubContainer, Text, Title } from './router.styled';

/**
 * @class Router
 * @description Componente del router principal
 */
export class Router extends PureComponent<Props> {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(res => {
        this.setState({ products: res });
      });
  }

  render() {
    return (
      <Provider store={Store}>
        <Container>
          <Image src={logo} />
          <Title>CodeSpace Shop</Title>
          <Text>La tienda donde podras comprar a tus profesores favoritos</Text>
          <SubContainer>
            {this.state.products.map((i: Products) => (
              <Product key={i.id} data={i} />
            ))}
          </SubContainer>
          <Cart />
        </Container>
      </Provider>
    );
  }
}
