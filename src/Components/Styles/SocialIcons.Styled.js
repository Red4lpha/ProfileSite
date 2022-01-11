import styled from "styled-components";

export const StyledSocialIcons = styled.section`
  
  svg {
    width: var(--size3);
  }
  svg:hover{
    color: ${({ theme }) => theme.dark.hover};
  }
`