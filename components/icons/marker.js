import React from "react"
import styled from "styled-components"
import { colors } from "../../styles/theme"

const Container = styled.div`
  height: 2.2rem;
  flex: 0 0 1rem;
`

export default class Marker extends React.PureComponent {
  render() {
    return (
      <Container>
        <svg height="100%" width="100%">
          <rect
            x="0"
            y="0.2rem"
            height="2rem"
            width="0.25rem"
            fill={colors.lightOrange}
          />
        </svg>
      </Container>
    )
  }
}
