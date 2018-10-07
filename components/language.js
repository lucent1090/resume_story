import React from "react"
import styled from "styled-components"
import { person } from "../constants/content"
import { LeftRight, ItemTitle, ItemContent } from "./common"
import Marker from "./icons/marker"

const Container = styled(LeftRight.Container)`
  margin-top: 1rem;
`

export default class Language extends React.Component {
  render() {
    return (
      <Container>
        <Marker />
        <div>
          <ItemTitle> Language </ItemTitle>
          {person.languages.map(language => {
            return (
              <ItemContent key={language}>
                {language + " " + person.level[language]}
              </ItemContent>
            )
          })}
        </div>
      </Container>
    )
  }
}
