import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  ${normalize}
  :root {
    --font-7xl: 7.478rem;
    --font-6xl: 5.61rem;
    --font-5xl: 4.209rem;
    --font-4xl: 3.157rem;
    --font-3xl: 2.369rem;
    --font-2xl: 1.777rem;
    --font-xl:  1.333rem;
    --font-base:1rem;
    --font-xs:  .75rem;
    --font-2xs: .563rem;

  }

/*   --size1: 4.209rem;
    --size2: 3.157rem;
    --size3: 2.369rem;
    --size4: 1.777rem;
    --size5: 1.333rem; */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {font-size: 100%;} /*16px*/
  body {
    background: ${({ theme }) => theme.dark.bg};
    color: ${({ theme }) => theme.dark.bodyFont};
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 1.3;
  }
  p {
    opacity: 0.6;
    line-height: 1.5;
    margin-bottom: 1rem;
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

/* 
Perfect fourth from type-scale.com
html {font-size: 100%;}

body {
  background: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.75;
  color: #000000;
}

p {margin-bottom: 1rem;}

h1, h2, h3, h4, h5 {
  margin: 3rem 0 1.38rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.3;
}

h1 {
  margin-top: 0;
  font-size: 4.209rem;
}

h2 {font-size: 3.157rem;}

h3 {font-size: 2.369rem;}

h4 {font-size: 1.777rem;}

h5 {font-size: 1.333rem;}

small, .text_small {font-size: 0.75rem;} */

`
export default GlobalStyles