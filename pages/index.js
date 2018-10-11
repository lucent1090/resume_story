import React from "react"
import styled from "styled-components"
import GlobalStyles from "../styles/global"
import Basic from "../components/basic"
import Language from "../components/language"
import Skill from "../components/skill"
import Experience from "../components/experience"
import Publication from "../components/publication"
import Education from "../components/education"

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  border: 1px solid red;
  padding: 0 1.6rem;
`

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: "intro", // -> final
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {})
    // const rect = this.basic.getBoundingClientRect()
    // console.log(this.basic)
  }

  render() {
    const { status, nScene } = this.state

    return (
      <Container>
        <Basic status={status} />
        <Education status={status} />
        <Publication status={status} />
        <Experience status={status} showDiving={false} />
        <Skill />
        {status !== "final" && <Language />}
      </Container>
    )
  }
}
