import styled from "styled-components";

export const StyledProjects = styled.section`
 
  .project-wrapper {
  display: flex;
  flex-direction: column;
  gap: 40px;
  //justify-content: stretch;
  align-items: stretch;
  padding: 30px 90px;
  text-align: center;
  
  article {
    flex-basis: 100%;
    border: 1px solid white;
    border-radius: 15px;
    padding: 15px;
    //background-color: ${({ theme }) => theme.dark.border};

    & > * {
      padding-top: 10px;
    }
    img {
      background-size: cover;
      width: 100%;
      max-height: 350px;
      padding-top: 0;
    }
    h3 {
      font-size: var(--font-2xl);
    }
    .article-skills {
      font-size: var(--font-xs);
    }
    .article-description {
      font-size: var(--font-base);
      text-align: left;
      padding: 0 40px;
      color: ${({ theme }) => theme.dark.paragraphFont};
    }
    ul {
      list-style: square;
    }
    li {
      padding-bottom: 10px;
    }
    .article-links {
      display: flex;
      align-content: center;
      justify-content: space-between;
      border-top: 0.5px solid ${({ theme }) => theme.dark.border};
      font-size: var(--font-xl);
    }
    .article-links div {
      text-align: center;
      flex-basis: 100%;
    }
  }
}
  
`