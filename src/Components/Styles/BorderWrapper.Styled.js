import styled from "styled-components";

export const StyledBorder = styled.section`
  margin-top: 50px;
  position: relative;
  border: 0.5px solid ${({ theme }) => theme.dark.border};
  font-size: var(--font-2xl);
  
  //Adding side margin for when the screen is below the container size
  @media screen and (max-width: 954px) {
    margin: 50px 20px 0 20px;
}
    
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