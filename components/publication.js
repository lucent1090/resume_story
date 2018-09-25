import React from "react";
import styled from "styled-components";
import { person } from "../constants/content";

export default class Publication extends React.Component {
  render() {
    return (
      <div>
        Publication
        <div>{person.publication.conference}</div>
        <div>{person.publication.paper}</div>
      </div>
    );
  }
}
