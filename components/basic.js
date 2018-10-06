import React from "react"
import styled from "styled-components"
import { person } from "../constants/content"
import { LeftRight } from "./common"
import { colors, fontWight } from "../styles/theme"
import Gmail from "./icons/gmail"
import Phone from "./icons/phone"

const Container = styled.div`
  width: 100%;
  margin-top: 1rem;
`
const PersonalInfo = styled(LeftRight.Container)`
  margin-bottom: 0.5rem;
`
const Name = styled.div`
  font-size: 1.8rem;
  font-weight: ${fontWight.bold};
  color: ${colors.lightGreen};
  margin-bottom: 0.3rem;
`
const JobTitle = styled(LeftRight.Left)`
  font-size: 1.3rem;
  font-weight: ${fontWight.bold};
  justify-content: center;
`
const AboutMe = styled.div`
  width: 88%;
  font-size: 1rem;
`
const Separator = styled.div`
  border-top: 1px solid ${colors.lightText};
  margin: 0.8rem 1.5rem;
`

export default class Basic extends React.Component {
  componentDidMount() {
    // console.log(this.basic)
    const rect = this.basic.getBoundingClientRect()
    console.log(rect)
  }

  render() {
    return (
      <Container innerRef={comp => (this.basic = comp)}>
        <Name> {person.name} </Name>
        <PersonalInfo>
          <JobTitle> {person.job} </JobTitle>
          <LeftRight.Right>
            <Gmail />
            <Phone />
          </LeftRight.Right>
        </PersonalInfo>
        <AboutMe>{person.descriptionShort}</AboutMe>
        <Separator />
      </Container>
    )
  }
}
