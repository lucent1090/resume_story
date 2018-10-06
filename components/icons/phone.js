import React from "react"
import styled from "styled-components"

const SvgContainer = styled.svg`
  height: 1.5rem;
  width: 2rem;

  .st0 {
    fill: #414042;
  }
`

export default class Phone extends React.PureComponent {
  render() {
    return (
      <SvgContainer version="1.1" viewBox="0 0 750 750">
        <g>
          <path
            className="st0"
            d="M447.3,61.5h-97c-6.9,0-12.5,5.6-12.5,12.5s5.6,12.5,12.5,12.5h97c6.9,0,12.5-5.6,12.5-12.5   S454.2,61.5,447.3,61.5z"
          />
          <circle className="st0" cx="315" cy="74" r="12.3" />
          <path
            className="st0"
            d="M515.5,26.5h-281c-23.7,0-43,19.3-43,43v42.1v489.4v79.6c0,23.7,19.3,43,43,43h281c23.7,0,43-19.3,43-43v-79.6   V111.6V69.5C558.5,45.8,539.2,26.5,515.5,26.5z M533.5,680.5c0,9.9-8.1,18-18,18h-281c-9.9,0-18-8.1-18-18v-67.1h317V680.5z    M533.5,588.4h-317V124.1h317V588.4z M533.5,99.1h-317V69.5c0-9.9,8.1-18,18-18h281c9.9,0,18,8.1,18,18V99.1z"
          />
          <path
            className="st0"
            d="M375,694.7c21.7,0,39.3-17.7,39.3-39.3S396.7,616,375,616s-39.3,17.7-39.3,39.3S353.3,694.7,375,694.7z    M375,641c7.9,0,14.3,6.4,14.3,14.3s-6.4,14.3-14.3,14.3s-14.3-6.4-14.3-14.3S367.1,641,375,641z"
          />
        </g>
      </SvgContainer>
    )
  }
}
