import React, { Fragment } from "react"
import styled from "styled-components"
import { person } from "../constants/content"
import { LeftRight, ItemTitle, ItemContent } from "./common"
import Marker from "./icons/marker"

const Container = styled(LeftRight.Container)`
  // margin-top: 1rem;
`
const Section = styled(ItemContent)`
  // margin-top: 0.2rem;
  // margin-bottom: 0.3rem;
`
const FixedWidth = styled.div`
  display: inline-block;
  width: ${props => props.w}rem;
`

const education = education => {
  return (
    <Fragment>
      <FixedWidth w={2}> {education.degree} </FixedWidth>
      <FixedWidth w={5}> {education.year} </FixedWidth>
      <FixedWidth w={6}> {education.school} </FixedWidth>
    </Fragment>
  )
}

export default class Education extends React.Component {
  render() {
    return (
      <Container>
        <Marker />
        <div>
          <ItemTitle> Education </ItemTitle>
          <Section> {education(person.ms)} </Section>
          <Section> {education(person.bs)} </Section>
        </div>
      </Container>
    )
  }
}
