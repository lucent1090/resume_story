import React from "react";
import styled from "styled-components";
import { person } from "../constants/content";
import { LeftRight, Marker, ItemTitle, ItemContent } from "../styles/common";

const SideMarker = styled(Marker)`
  margin: 0.3rem 0.9rem 3.5rem 0rem;
`;

export default class Skill extends React.Component {
  render() {
    return (
      <LeftRight.Container>
        <SideMarker />
        <div>
          <ItemTitle> Skill </ItemTitle>
          {person.skills.map(skill => {
            return (
              <ItemContent key={skill}>
                {skill + " - " + person.frameworks[skill]}
              </ItemContent>
            );
          })}
        </div>
      </LeftRight.Container>
    );
  }
}
