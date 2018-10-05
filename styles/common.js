import styled from "styled-components";

const LeftRightContainer = styled.div`
  width: 100%;
  display: flex;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
`;
const Right = styled.div`
  margin-left: auto;
  margin-top: auto;
  text-align: right;
`;

export const LeftRight = {
  Container: LeftRightContainer,
  Left,
  Right
};
