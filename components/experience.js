import React, { Fragment } from "react"
import styled from "styled-components"
import { person } from "../constants/content"
import { LeftRight, ItemTitle, ItemContent } from "./common"
import Marker from "./icons/marker"

const Container = styled(LeftRight.Container)`
  margin-top: 0.6rem;
`
const List = styled.ul`
  padding-left: 1rem;
  margin: 0;
`
const Section = styled(ItemContent)`
  margin-top: 0.3rem;
  margin-bottom: 0.6rem;
`

const programmingJob = job => {
  return (
    <Section>
      <div>{job.duration}</div>
      <div>{job.company + " " + job.title}</div>
      {/* <List>
        {job.description.map((jobDetail, idx) => (
          <li key={job.jobDetail + idx.toString()}>{jobDetail}</li>
        ))}
      </List> */}
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
    const { showDiving } = this.props

    return (
      <Container>
        <Marker />
        <div>
          <ItemTitle> Experience </ItemTitle>
          {programmingJob(person.experience.appier)}
          {programmingJob(person.experience.reporter)}
          {showDiving && (
            <Fragment>
              {divingJob(person.experience.okinawa)}
              {divingJob(person.experience.bali)}
            </Fragment>
          )}
          {programmingJob(person.experience.ami)}
        </div>
      </Container>
    )
  }
}
