import React from "react"
import styled from "styled-components"
import { person } from "../constants/content"
import { LeftRight, ItemTitle, ItemContent } from "./common"
import Marker from "./icons/marker"

const Container = styled(LeftRight.Container)`
  margin-top: 0.3rem;
  ${props => (props.status === "hide" ? "opacity: 0" : "")};
`

export default class Publication extends React.Component {
  componentDidMount() {
    const { setBounding } = this.props

    setBounding("publication", this.publication.getBoundingClientRect())
  }

  render() {
    const { status } = this.props

    return (
      <Container innerRef={comp => (this.publication = comp)} status={status}>
        <Marker />
        <div>
          <ItemTitle> Publication </ItemTitle>
          <ItemContent> {person.publication.conference} </ItemContent>
          {status !== "final" && (
            <ItemContent> {person.publication.paper} </ItemContent>
          )}
        </div>
      </Container>
    )
  }
}
