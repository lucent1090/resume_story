import React from "react"
import styled from "styled-components"

const SvgContainer = styled.svg`
  height: 1.5rem;
  width: 2rem;

  .fil2 {
    fill: none;
  }
  .fil0 {
    fill: #424242;
  }
  .fil1 {
    fill: #424242;
    fill-rule: nonzero;
  }
`

export default class Gmail extends React.PureComponent {
  render() {
    return (
      <SvgContainer
        version="1.0"
        height="2048px"
        viewBox="0 0 2048 2048"
        width="2048px"
      >
        <defs>
          <style type="text/css" />
        </defs>
        <g id="Layer_x0020_1">
          <g id="_333160488">
            <g>
              <path
                className="fil0"
                d="M1647.03 1559.85l43.767 0c55.6619,0 101.202,-45.5398 101.202,-101.202l0 -869.293c0,-55.6619 -45.5398,-101.202 -101.202,-101.202l-43.767 0 0 1071.7z"
                id="_333160872"
              />
              <path
                className="fil0"
                d="M1028.28 1165.29l-1.1941 0.839764 -3.08977 -2.17559 -3.08977 2.17559 -1.1941 -0.839764c-256.16,-180.406 -507.358,-373.438 -763.717,-562.128l68.3245 -107.101 74.6469 -6.10394 1.99725 -1.80236 620.021 462.933 3.01063 -2.2311 3.01063 2.2311 620.021 -462.933 1.99725 1.80236 74.6469 6.10394 68.3245 107.101c-256.358,188.691 -507.557,381.722 -763.717,562.128z"
                id="_333160368"
              />
              <path
                className="fil0"
                d="M400.968 1559.85l-43.767 0c-55.6619,0 -101.202,-45.5398 -101.202,-101.202l0 -869.293c0,-55.6619 45.5398,-101.202 101.202,-101.202l43.767 0 0 1071.7z"
                id="_333160728"
              />
            </g>
            <polygon
              className="fil1"
              id="_333160440"
              points="366.182,1509.25 1681.82,1509.25 1681.82,1559.85 366.182,1559.85 "
            />
            <polygon
              className="fil1"
              id="_333160752"
              points="366.182,488.152 1681.82,488.152 1681.82,538.754 366.182,538.754 "
            />
          </g>
        </g>
        <rect className="fil2" height="2048" width="2048" />
      </SvgContainer>
    )
  }
}
