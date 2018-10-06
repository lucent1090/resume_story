import { injectGlobal } from "styled-components"
import { colors, fontWight } from "./theme"

export default injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    width: 100%;
  }

  body {
    font-family: 'Roboto', helvetica, 'PingFang TC', 'Noto Sans TC', 'Microsoft JhengHei', sans-serif;
    font-weight: ${fontWight.normal};
    background-color: #FFFDFA;
    color: ${colors.text}
    width: 100%;
    margin: 0;
    line-height: 1.3rem;
  }
`
