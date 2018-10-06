import React from "react"
import styled from "styled-components"
import { person } from "../constants/content"
import { LeftRight, Marker, ItemTitle, ItemContent } from "../styles/common"

const Container = styled(LeftRight.Container)`
  margin-top: 1rem;
`
const SideMarker = styled(Marker)`
  margin: 0.3rem 0.9rem 35.5rem 0rem;
`
const List = styled.ul`
  padding-left: 1rem;
  margin: 0;
`
const Section = styled(ItemContent)`
  margin-top: 0.3rem;
  margin-bottom: 0.8rem;
`

const programmingJob = job => {
  return (
    <Section>
      <div>{job.duration}</div>
      <div>{job.company}</div>
      <div>{job.title}</div>
      <List>
        {job.description.map((jobDetail, idx) => (
          <li key={job.jobDetail + idx.toString()}>{jobDetail}</li>
        ))}
      </List>
    </Section>
  )
}

const divingJob = job => {
  return (
    <Section>
      <div>{job.duration}</div>
      <div>{job.place}</div>
      <div>{job.compant}</div>
      <List>
        {job.description.map((jobDetail, idx) => (
          <li key={job.jobDetail + idx.toString()}>{jobDetail}</li>
        ))}
      </List>
    </Section>
  )
}

export default class Experience extends React.Component {
  render() {
    return (
      <Container>
        <SideMarker />
        <div>
          <ItemTitle> Experience </ItemTitle>
          {programmingJob(person.experience.appier)}
          {programmingJob(person.experience.reporter)}
          {divingJob(person.experience.okinawa)}
          {divingJob(person.experience.bali)}
          {programmingJob(person.experience.ami)}
        </div>
      </Container>
    )
  }
}
