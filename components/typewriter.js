import React from "react"
import styled, { keyframes } from "styled-components"
import { colors } from "../styles/theme"

// typing speed (ms)
const tickTime = 100

const blinkCaret = keyframes`
  from, to { 
    border-color: transparent;
  }
  50% { 
    border-color: ${colors.text}; 
  }
`
const Caret = styled.div`
  height: 1.2rem;
  border-left: 0.15em solid ${colors.text};
  animation: ${blinkCaret} 0.75s step-end infinite;
`
const Words = styled.div`
  display: flex;
`

export default class TypeWriter extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      textIdx: 0,
    }

    this.setTextIdx = this.setTextIdx.bind(this)
  }

  setTextIdx() {
    const { textIdx } = this.state
    const { text } = this.props

    if (textIdx < text.length) {
      this.setState({ textIdx: textIdx + 1 })
    } else {
      clearInterval(this.timer)
    }
  }

  componentDidMount() {
    this.timer = setInterval(this.setTextIdx, tickTime)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const { textIdx } = this.state
    const { text } = this.props

    return (
      <Words>
        {" "}
        {text.substring(0, textIdx)} <Caret />{" "}
      </Words>
    )
  }
}
