import React from "react";
import styled from "styled-components";
import Basic from "../components/basic";
import Experience from "../components/experience";
import Publication from "../components/publication";
import Education from "../components/education";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

class Main extends React.Component {
  render() {
    return (
      <div>
        <Title> Test Main </Title>
        <Basic />
        <Experience />
        <Publication />
        <Education />
      </div>
    );
  }
}

export default Main;
