import React from "react";
import styled from "styled-components";
import { person } from "../constants/content";

const programmingJob = job => {
  return (
    <div>
      <div>{job.duration}</div>
      <div>{job.company}</div>
      <div>{job.title}</div>
      <ul>
        {job.description.map((jobDetail, idx) => (
          <li key={job.jobDetail + idx.toString()}>{jobDetail}</li>
        ))}
      </ul>
    </div>
  );
};

const divingJob = job => {
  return (
    <div>
      <div>{job.duration}</div>
      <div>{job.place}</div>
      <div>{job.compant}</div>
      <ul>
        {job.description.map((jobDetail, idx) => (
          <li key={job.jobDetail + idx.toString()}>{jobDetail}</li>
        ))}
      </ul>
    </div>
  );
};

export default class Experience extends React.Component {
  render() {
    return (
      <div>
        Experience
        {programmingJob(person.experience.appier)}
        {programmingJob(person.experience.reporter)}
        {programmingJob(person.experience.ami)}
        {divingJob(person.experience.okinawa)}
        {divingJob(person.experience.bali)}
      </div>
    );
  }
}
