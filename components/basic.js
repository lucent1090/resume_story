import React from "react"
import styled from "styled-components"
import { person } from "../constants/content"
import { LeftRight } from "../styles/common"

const Container = styled.div`
  width: 100%;
  text-align: justify;
  margin-top: 1rem;
`
const PersonalInfo = styled(LeftRight.Container)`
  margin-bottom: 0.4rem;
`
const Contact = styled(LeftRight.Right)`
  font-size: 12px;
`
const Name = styled.div`
  font-weight: bold;
`
const JobTitle = styled.div`
  font-size: 0.9rem;
`
const AboutMe = styled.div`
  font-size: 12px;
`
const Separator = styled.div`
  border-top: 1px solid #000;
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
        <PersonalInfo>
          <LeftRight.Left>
            <Name> {person.name} </Name>
            <JobTitle> {person.job} </JobTitle>
          </LeftRight.Left>
          <Contact>
            <div> {person.email} </div>
            <div> {person.tel} </div>
          </Contact>
        </PersonalInfo>
        <AboutMe>{person.description}</AboutMe>
        <Separator />
      </Container>
    )
  }
}
