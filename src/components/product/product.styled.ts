import { styled } from '@Tools';

export const Container = styled.div`
  width: 300px;
  margin: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: flex-start;
`;

export const SubContainer = styled.div`
  padding: 20px 15px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const ImgBox = styled.div`
  box-sizing: border-box;
  position: relative;

  &:hover div {
    top: 30%;
    opacity: 1;
  }
`;

export const Transparent = styled.div`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 100%;
  opacity: 0;
  background-color: rgba(46, 46, 46, 0.3);
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  margin: 0;
`;

export const Link = styled.a`
  display: block;
  padding: 10px 15px;
  border: 1px solid #2e2e2e;
  border-radius: 5px;
  transition: 0.1s;
  cursor: pointer;
  user-select: none;

  &:hover {
    border-color: #cccccc;
    background-color: #d33256;
    color: #ffffff;
  }

  &:active {
    background-color: #9a3447;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

export const Text = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
`;
