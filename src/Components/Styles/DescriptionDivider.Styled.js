import styled from "styled-components";

export const StyledDescriptionDivider = styled.section`
  border-top: 0.5px solid ${({ theme }) => theme.dark.border};
`

export const StyledSkills = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  & > div {
    flex-basis: 33%;
    text-align: center;
    border: 0.5px solid ${({ theme }) => theme.dark.border};
    border-right: 0;
    border-top: 0;
    padding: 20px 0;
  }
  & > div:last-child {
    border-right: 0.5px solid ${({ theme }) => theme.dark.border};
  }
  svg {
    padding-bottom: 5px;
  }

  //Mobile
  @media(max-width: ${({ theme}) => theme.mobile}) {
		flex-direction: column;
    justify-content: stretch;
    align-items: stretch;

    & > div {
      flex: 1;
    }
  }
`
