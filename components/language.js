import React from "react"
import styled from "styled-components"
import { person } from "../constants/content"
import { LeftRight, ItemTitle, ItemContent } from "./common"
import Marker from "./icons/marker"

const Container = styled(LeftRight.Container)`
  margin-top: 1rem;
  ${props => (props.status === "hide" ? "opacity: 0" : "")};
`

export default class Language extends React.Component {
  componentDidMount() {
    const { setBounding } = this.props

    setBounding("language", this.language.getBoundingClientRect())
  }

  render() {
    const { status } = this.props
    return (
      <Container innerRef={comp => (this.language = comp)} status={status}>
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
