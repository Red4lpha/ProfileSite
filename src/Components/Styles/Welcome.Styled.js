import styled from "styled-components";

export const StyledWelcome = styled.section`
  padding: var(--font-4xl) 0;
`
export const StyledWelcomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;

  & > div {
    flex-basis: 50%;
  }
  img {
    border-radius: 50%;
  }
  h2 {
    font-size: var(--font-3xl);
    padding-bottom: 20px;
  }
  p {
    font-size: var(--font-base);
  }

  //Mobile
  @media(max-width: ${({ theme}) => theme.mobile}) {
		flex-direction: column;

    & > div {
      padding: 0 20px;
    }
	}

`