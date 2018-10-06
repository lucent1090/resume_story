import React from "react"
import styled from "styled-components"
import { person } from "../constants/content"
import { LeftRight, Marker, ItemTitle, ItemContent } from "../styles/common"

const Container = styled(LeftRight.Container)`
  margin-top: 0.3rem;
`
const SideMarker = styled(Marker)`
  margin: 0.3rem 0.9rem 3.5rem 0rem;
`
export default class Publication extends React.Component {
  render() {
    return (
      <Container>
        <SideMarker />
        <div>
          <ItemTitle> Publication </ItemTitle>
          <ItemContent> {person.publication.conference} </ItemContent>
          <ItemContent> {person.publication.paper} </ItemContent>
        </div>
      </Container>
    )
  }
}
