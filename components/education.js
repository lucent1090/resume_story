import React, { Fragment } from "react"
import styled from "styled-components"
import { person } from "../constants/content"
import { LeftRight, Marker, ItemTitle, ItemContent } from "../styles/common"

const Container = styled(LeftRight.Container)`
  margin-top: 1rem;
  margin-bottom: 1rem;
`
const SideMarker = styled(Marker)`
  margin: 0.3rem 0.9rem 10rem 0rem;
`
const Section = styled(ItemContent)`
  margin-top: 0.2rem;
  margin-bottom: 0.5rem;
`

const education = education => {
  return (
    <Fragment>
      <div> {education.year} </div>
      <div> {education.school} </div>
      <div> {education.degree} </div>
    </Fragment>
  )
}

export default class Education extends React.Component {
  render() {
    return (
      <Container>
        <SideMarker />
        <div>
          <ItemTitle> Education </ItemTitle>
          <Section> {education(person.ms)} </Section>
          <Section> {education(person.bs)} </Section>
        </div>
      </Container>
    )
  }
}
