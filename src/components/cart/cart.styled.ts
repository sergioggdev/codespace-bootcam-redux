import { styled } from '@Tools';

export const Container = styled.div`
  display: block;
  position: fixed;
  top: 20px;
  right: 20px;
  box-sizing: border-box;

  &:hover div {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const Image = styled.img`
  width: 30px;
  pointer-events: auto;
`;

export const CartArea = styled.div`
  transition: 0.5s;
  opacity: 0;
  pointer-events: none;
  box-sizing: border-box;
  background-color: #ffff;
  position: absolute;
  width: 250px;
  right: 0;
  top: 40px;
  height: 300px;
  border: 1px solid #cccccc;
  border-radius: 5px 0 5px 5px;
  padding: 20px;

  &:before {
    content: '';
    position: absolute;
    top: -7px;
    right: 3px;
    height: 15px;
    width: 15px;
    background-color: #fff;
    transform: rotate(45deg);
  }
`;

export const CartBox = styled.div`
  box-sizing: border-box;
  overflow: scroll;
  width: 100%;
  height: 100%;
`;
