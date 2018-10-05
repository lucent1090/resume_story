import React from "react";
import styled from "styled-components";
import { person } from "../constants/content";
import { LeftRight } from "../styles/common";

const Container = styled.div`
  width: 100%;
  text-align: justify;
`;
const PersonalInfo = styled(LeftRight.Container)`
  margin-bottom: 0.8rem;
`;
const Contact = styled(LeftRight.Right)`
  font-size: 0.5rem;
`;
const Name = styled.div`
  font-weight: bold;
`;
const JobTitle = styled.div`
  font-size: 0.9rem;
`;

export default class Basic extends React.Component {
  componentDidMount() {
    // console.log(this.basic)
    const rect = this.basic.getBoundingClientRect();
    console.log(rect);
  }

  render() {
    return (
      <Container innerRef={comp => (this.basic = comp)}>
        <PersonalInfo>
          <LeftRight.Left>
            <Name> {person.name} </Name>
            <JobTitle> {person.job} </JobTitle>
          </LeftRight.Left>
          <Contact>
            <div> {person.email} </div>
            <div> {person.tel} </div>
          </Contact>
        </PersonalInfo>
        {person.description}
      </Container>
    );
  }
}
