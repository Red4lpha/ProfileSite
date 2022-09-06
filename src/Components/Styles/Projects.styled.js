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
      font-size: 100px;
      width: 100px;
      //background-color: inherit;
      //border: 1px solid red;
      border: 0;
      background-color: #FFFFFF20;
      color: inherit;
      border-radius: 50%;
    }
    .left {
      left: -30px;
      top: calc(50% - 50px);
    }
    .right {
      right: -30px;
      top: calc(50% - 50px);
    }

    article {
      display: flex;
      flex-direction: column;
      flex-basis: 100%;
      //border: 2px solid #0075A2; - old style
      border: 0.5px solid ${({ theme }) => theme.dark.border};
      border-radius: 15px;
      padding: 15px;
      max-width: 450px;
      min-height: 680px;
      margin: 0 auto;
      justify-content: center;
      //margin: 0 100px;
      //background-color: ${({ theme }) => theme.dark.border};

      &:hover{
        border: 1px solid ${({ theme }) => theme.dark.hoverBlue};
        box-shadow: 2px 2px 10px -3px #0080B1;

        h3 {
          color: ${({ theme }) => theme.dark.hoverBlue};
        }
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
        flex-grow: 2;
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
  
    
    //?Tablet
    @media(max-width: ${({ theme}) => theme.tablet}) {
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;

    .left {
      left: 0;
    }
    .right {
      right: 0;
      
    }
    }

    //?Mobile
    @media(max-width: ${({ theme}) => theme.mobile}) {
      padding: 30px 5px;

      .left {
        left: -15px;
      }
      .right {
        right: -15px;
      }

      article {
        border: 0;
        font-size: .5em;
        min-height: 400px;
        padding: 5px;

        .article-description {
        font-size: var(--font-xs);
        padding: 0 10px;
      }
      }
    }

  }
`