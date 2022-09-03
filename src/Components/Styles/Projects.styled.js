import styled from "styled-components";

export const StyledProjects = styled.section`
 
  .project-wrapper {
  position: relative;  
  display: flex;
  flex-direction: row;
  gap: 15px;
  //justify-content: stretch;
  align-items: stretch;
  padding: 30px 30px;
  text-align: center;
  
  .project-buttons {
    position: absolute;
    font-size: 125px;
    background-color: inherit;
    border: 0;
    color: inherit;
  }
  .left {
    left: -5%;
    top: calc(50% - 62px);
  }
  .right {
    right: -5%;
    top: calc(50% - 62px);
  }

  article {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    border: 2px solid #0075A2;
    border-radius: 15px;
    padding: 15px;
    //margin: 0 100px;
    //background-color: ${({ theme }) => theme.dark.border};

    &:hover{
      box-shadow: 4px 4px 10px -3px #0080B1;
    }
    & > * {
      padding-top: 10px;
    }
    img {
      background-size: cover;
      width: 100%;
      max-height: 350px;
      padding-top: 0;
      //padding: 2px 2px;

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
      //min-height: 210px;
      flex-basis: 100%;
    }
    ul {
      list-style: square;
      display: table;
      margin: auto 0;
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

  //Mobile
  @media(max-width: ${({ theme}) => theme.mobile}) {
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  }
 /*  & > div {
    flex: 1;
  } */
}
  
`