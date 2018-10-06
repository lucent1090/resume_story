import styled from "styled-components"

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
  border: 2px solid #002e73;
`
export const ItemTitle = styled.div`
  color: #002e73;
`
export const ItemContent = styled.div`
  font-size: 0.8rem;
`
