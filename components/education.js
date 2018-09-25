import React from "react";
import styled from "styled-components";
import { person } from "../constants/content";

const education = education => {
  return (
    <div>
      <div>{education.year}</div>
      <div>{education.school}</div>
      <div>{education.degree}</div>
    </div>
  );
};

export default class Education extends React.Component {
  render() {
    return (
      <div>
        Education
        {education(person.ms)}
        {education(person.bs)}
      </div>
    );
  }
}
