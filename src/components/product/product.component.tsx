// Import libraries
import * as React from 'react';
const { Component } = React;

// Import global resources

// Import local resources
import { Props } from './product.types';
import {
  Title,
  Container,
  Image,
  Link,
  SubContainer,
  Transparent,
  ImgBox,
  Text,
} from './product.styled';

/**
 * @class Product
 * @description Cada uno de los productos
 */
export class Product extends Component<Props> {
  render() {
    const { name, image, price } = this.props.data;
    return (
      <Container>
        <ImgBox>
          <Transparent>
            <Text>{price}</Text>
          </Transparent>
          <Image src={`http://localhost:3000${image}`} />
        </ImgBox>
        <SubContainer>
          <Title>{name}</Title>
          <Link>Añadir</Link>
        </SubContainer>
      </Container>
    );
  }
}
