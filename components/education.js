import React, { Fragment } from "react"
import styled from "styled-components"
import { person } from "../constants/content"
import { LeftRight, ItemTitle, ItemContent } from "./common"
import Marker from "./icons/marker"

const widthForBrief = {
  degreeWidth: 2,
  yearWidth: 5,
  schoolWidth: 6,
}

const Container = styled(LeftRight.Container)`
  ${props => (props.status === "hide" ? "opacity: 0" : "")};
`
const Section = styled(ItemContent)`
  ${props => {
    return props.addBottomSpace ? "" : "margin-bottom: 0.5rem;"
  }};
`
const MinWidth = styled.div`
  display: inline-block;
  min-width: ${props => props.width}rem;
`

const educationBrief = education => {
  const { wDegree, wYear, wSchool } = widthForBrief

  return (
    <Fragment>
      <MinWidth width={wDegree}> {education.degree} </MinWidth>
      <MinWidth width={wYear}> {education.year} </MinWidth>
      <MinWidth width={wSchool}> {education.school} </MinWidth>
    </Fragment>
  )
}

const educationFull = education => {
  return (
    <Fragment>
      <div> {education.year} </div>
      <div> {education.school} </div>
      <div> {education.degree} </div>
    </Fragment>
  )
}

export default class Education extends React.Component {
  componentDidMount() {
    const { setBounding } = this.props

    setBounding("education", this.education.getBoundingClientRect())
  }

  render() {
    const { status } = this.props
    const showBriefEducation = status === "final"
    const { ms, bs } = showBriefEducation
      ? person.education.brief
      : person.education.full

    return (
      <Container innerRef={comp => (this.education = comp)} status={status}>
        <Marker />
        <div>
          <ItemTitle> Education </ItemTitle>
          <Section addBottomSpace={showBriefEducation}>
            {" "}
            {showBriefEducation ? educationBrief(ms) : educationFull(ms)}{" "}
          </Section>
          <ItemContent>
            {" "}
            {showBriefEducation ? educationBrief(bs) : educationFull(bs)}{" "}
          </ItemContent>
        </div>
      </Container>
    )
  }
}
