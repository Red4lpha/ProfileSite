import styled from "styled-components";

export const StyledSkills = styled.section`
  padding-top: 30px;

  .skills-wrapper {
    position: relative;
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: center;
    border: 0.5px solid ${({ theme }) => theme.dark.border};
    padding: 30px;
  }

  span {
    position: absolute;
    top: calc(var(--font-xl) * -.75);
    left: 2rem;
    font-size: var(--font-xl);
    background-color: ${({ theme }) => theme.dark.bg};
    padding: 0 10px;
  }
  h2 {
    //font-size: var(--font-base);
    font-size: 1em;
  }

  .box {
    width: 100px;
    height: 100px;
    background-color: green;
  }
`