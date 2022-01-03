import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.dark.bg};
    color: ${({ theme }) => theme.dark.bodyFont};
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
    padding: 0;
  }
  p {
    opacity: 0.6;
    line-height: 1.5;
  }
  img {
    max-width: 100%;
  }
  ul {
  list-style: none;
  }
  a,
  a:hover,
  a:visited,
  a:active {
    color: inherit;
    text-decoration: none;
  }
`
export default GlobalStyles