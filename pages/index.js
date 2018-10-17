import React from "react"
import styled from "styled-components"
import GlobalStyles from "../styles/global"
import Basic from "../components/basic"
import Language from "../components/language"
import Skill from "../components/skill"
import Experience from "../components/experience"
import Publication from "../components/publication"
import Education from "../components/education"

const scrollDelta = 30

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
      status: {
        // hide -> intro -> final
        basic: "hide",
        education: "hide",
        publication: "hide",
        experience: "hide",
        skill: "hide",
        language: "hide",
      },
      boundingBoxes: [],
    }

    this.setBoundingBox = this.setBoundingBox.bind(this)
    this.scrolling = this.scrolling.bind(this)
  }

  setBoundingBox(compName, rect) {
    this.setState(prevState => {
      const newBoundingBoxes = [
        ...prevState.boundingBoxes,
        { name: compName, top: rect.top, height: rect.height },
      ]
      return { ...prevState, boundingBoxes: newBoundingBoxes }
    })
  }

  scrolling() {
    const { boundingBoxes, status } = this.state
    const delta = window.scrollY + scrollDelta
    const newStatus = {}

    boundingBoxes.forEach(box => {
      if (box.top < delta) {
        newStatus[box.name] = "intro"
      } else {
        newStatus[box.name] = "hide"
      }
    })
    this.setState({ status: Object.assign({}, status, newStatus) })
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrolling)
  }

  render() {
    const { status } = this.state

    return (
      <Container>
        <Basic status={status.basic} setBounding={this.setBoundingBox} />
        <Education
          status={status.education}
          setBounding={this.setBoundingBox}
        />
        <Publication
          status={status.publication}
          setBounding={this.setBoundingBox}
        />
        <Experience
          status={status.experience}
          showDiving={false}
          setBounding={this.setBoundingBox}
        />
        <Skill status={status.skill} setBounding={this.setBoundingBox} />
        {status !== "final" && (
          <Language
            status={status.language}
            setBounding={this.setBoundingBox}
          />
        )}
      </Container>
    )
  }
}
