import { ComponentType } from 'react';
import { styled } from '@Tools';
import { TextType } from './cart.types';

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
  border-radius: 5px 0 5px 5px;
  padding: 15px;

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
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
`;

export const BoxMiniCart = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-bottom: 10px;
  flex-shrink: 0;
`;

export const MiniImg = styled.img`
  box-sizing: border-box;
  width: 30%;
  height: 100%;
`;

export const MiniDataArea = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  width: 64%;
  padding: 5px 10px;
`;

export const MiniCloseArea = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  width: 6%;
  font-weight: bold;
  font-size: 16px;
`;

export const MiniTxt: ComponentType<TextType> = styled.p`
  box-sizing: border-box;
  margin: 0;
  font-size: 12px;
  font-weight: ${(props: any) => (props.bold ? 'bold' : 'normal')};
`;

export const Link = styled.a`
  box-sizing: border-box;
  cursor: pointer;
  pointer-events: auto;
  user-select: none;
`;
