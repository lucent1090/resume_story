import React from "react"
import styled from "styled-components"
import { person } from "../constants/content"
import { LeftRight, ItemTitle, ItemContent } from "./common"
import Marker from "./icons/marker"

export default class Skill extends React.Component {
  render() {
    return (
      <LeftRight.Container>
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
      </LeftRight.Container>
    )
  }
}
