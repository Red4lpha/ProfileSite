import styled from "styled-components";

export const StyledSocialIcons = styled.section`
  
  svg {
    width: var(--font-3xl);
  }
  svg:hover{
    color: ${({ theme }) => theme.dark.hover};
  }

  @media(max-width: ${({ theme}) => theme.tablet}) {
		display: none;
	}
`