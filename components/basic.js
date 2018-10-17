import React, { Fragment } from "react"
import styled from "styled-components"
import { person } from "../constants/content"
import { LeftRight } from "./common"
import { colors, fontWight } from "../styles/theme"
import Gmail from "./icons/gmail"
import Phone from "./icons/phone"

const Container = styled.div`
  width: 100%;
  margin-top: 1.3rem;
  ${props => (props.status === "hide" ? "opacity: 0" : "")};
`
const PersonalInfo = styled(LeftRight.Container)`
  margin-bottom: 0.5rem;
`
const Name = styled.div`
  font-size: 1.8rem;
  font-weight: ${fontWight.bold};
  color: ${colors.lightGreen};
  margin-bottom: 0.4rem;
`
const JobTitle = styled(LeftRight.Left)`
  font-size: 1.3rem;
  font-weight: ${fontWight.bold};
  justify-content: center;
`
const AboutMe = styled.div`
  // width: 88%;
`
const Separator = styled.div`
  border-top: 1px solid ${colors.lightText};
  margin: 0.5rem 1.5rem;
`

export default class Basic extends React.Component {
  componentDidMount() {
    const { setBounding } = this.props

    setBounding("basic", this.basic.getBoundingClientRect())
  }

  render() {
    const { status } = this.props

    return (
      <Container innerRef={comp => (this.basic = comp)} status={status}>
        <Name> {person.name} </Name>
        <PersonalInfo>
          <JobTitle> {person.job} </JobTitle>
          <LeftRight.Right>
            <Gmail />
            <Phone />
          </LeftRight.Right>
        </PersonalInfo>
        {status === "final" && (
          <Fragment>
            <AboutMe>{person.descriptionShort}</AboutMe>
            <Separator />
          </Fragment>
        )}
      </Container>
    )
  }
}
