import React from "react"
import styled from "styled-components"
import { person } from "../constants/content"
import { LeftRight, ItemTitle, ItemContent } from "./common"
import Marker from "./icons/marker"

const Container = styled(LeftRight.Container)`
  ${props => (props.status === "hide" ? "opacity: 0" : "")};
`

export default class Skill extends React.Component {
  componentDidMount() {
    const { setBounding } = this.props

    setBounding("skill", this.skill.getBoundingClientRect())
  }

  render() {
    const { status } = this.props

    return (
      <Container innerRef={comp => (this.skill = comp)} status={status}>
        <Marker />
        <div>
          <ItemTitle> Skill </ItemTitle>
          {person.skills.map(skill => {
            return (
              <ItemContent key={skill}>
                {skill + " - " + person.frameworks[skill]}
              </ItemContent>
            )
          })}
        </div>
      </Container>
    )
  }
}
