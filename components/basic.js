import React from "react";
import styled from "styled-components";
import { person } from "../constants/content";

const Container = styled.div`
  width: 100%;
  text-align: justify;
`;
const LeftRightContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 0.8rem;
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
const Name = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export default class Basic extends React.Component {
  render() {
    return (
      <Container>
        <LeftRightContainer>
          <Left>
            <Name> {person.name} </Name>
            <div> {person.job} </div>
          </Left>
          <Right>
            <div> {person.email} </div>
            <div> {person.tel} </div>
          </Right>
        </LeftRightContainer>
        {person.description}
      </Container>
    );
  }
}
