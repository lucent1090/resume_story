import styled from "styled-components"
import { colors, fontWight } from "../styles/theme"

const LeftRightContainer = styled.div`
  width: 100%;
  display: flex;
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
`
const Right = styled.div`
  margin-left: auto;
  margin-top: auto;
  text-align: right;
`

export const LeftRight = {
  Container: LeftRightContainer,
  Left,
  Right,
}

export const Marker = styled(Left)`
  border: 2px solid ${colors.lightOrange};
`
export const ItemTitle = styled.div`
  font-size: 1.1rem;
  font-weight: ${fontWight.bold};
  color: ${colors.lightOrange};
`
export const ItemContent = styled.div`
  font-size: 1rem;
`
