import { styled } from '@Tools';

export const Container = styled.div`
  padding: 40px 0px;
  width: 100vw;
  max-width: 992px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
`;

export const SubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  box-sizing: border-box;
`;

export const Image = styled.img`
  width: 150px;
`;

export const Title = styled.h1`
  font-size: 38px;
  margin: 0px;
`;

export const Text = styled.p`
  font-size: 18px;
  text-align: center;
  margin: 5px 0;
`;
