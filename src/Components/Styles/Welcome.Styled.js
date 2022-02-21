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
    color: #fff;
    font-size: var(--font-3xl);
    padding-bottom: 20px;
  }
  p {
    font-size: var(--font-base);
  }
`