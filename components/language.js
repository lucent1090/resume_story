import React from "react"
import styled from "styled-components"
import { person } from "../constants/content"
import { LeftRight, Marker, ItemTitle, ItemContent } from "../styles/common"

const Container = styled(LeftRight.Container)`
  margin-top: 1rem;
`
const SideMarker = styled(Marker)`
  margin: 0.3rem 0.9rem 3.5rem 0rem;
`

export default class Language extends React.Component {
  render() {
    return (
      <Container>
        <SideMarker />
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
