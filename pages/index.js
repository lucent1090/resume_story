import React from "react";
import styled from "styled-components";
import GlobalStyles from "../styles/global";
import Basic from "../components/basic";
import Experience from "../components/experience";
import Publication from "../components/publication";
import Education from "../components/education";

const Container = styled.div`
  width: 100%;
  padding: 0 1.6rem;
`;

class Main extends React.Component {
  componentDidMount() {
    // window.addEventListener('scroll', () => {console.log('tmp')})
    // const rect = this.basic.getBoundingClientRect()
    // console.log(this.basic)
  }

  render() {
    return (
      <Container>
        <Basic />
        <Experience />
        <Publication />
        <Education />
      </Container>
    );
  }
}

export default Main;
