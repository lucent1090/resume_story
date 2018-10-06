import { injectGlobal } from "styled-components"

export default injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    width: 100%;
  }

  body {
    width: 100%;
    margin: 0;
  }
`
