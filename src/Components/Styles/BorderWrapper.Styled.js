import styled from "styled-components";

export const StyledBorder = styled.section`
  margin-top: 30px;
  position: relative;
  border: 0.5px solid ${({ theme }) => theme.dark.border};
  font-size: var(--font-2xl);
  color: #fff;
    
 /*  ::before {
    content: 'SKILLS';
    position: absolute;
    top: calc(var(--font-2xl) * -.75);
    left: 2rem;
    background-color: ${({ theme }) => theme.dark.bg};
    padding: 0 10px;
    
    }  */
  

  span.title {
    position: absolute;
    top: calc(var(--font-xl) * -.75);
    left: 2rem;
    font-size: var(--font-xl);
    background-color: ${({ theme }) => theme.dark.bg};
    padding: 0 10px;
  
    h2 {
      //font-size: var(--font-base);
      font-size: 1em;
    }
  }
`