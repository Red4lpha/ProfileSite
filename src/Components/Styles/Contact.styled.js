import styled from "styled-components";

export const StyledContact = styled.section`
  .contact-wrapper {
  display: flex;
  flex-direction: row;
  //gap: 40px;
  justify-content: center;
  align-items: flex-start;
  padding: 30px;
  font-size: var(--font-base);
  
    h3 {
      padding-bottom: 20px;
    }
    label, input {
      display: block;
    }
    input, textarea {
      background-color: rgba(255,255,255,.1);
      color: rgba(255,255,255,.7);
      background-clip: padding-box;
      border-color: rgba(255,255,255,.08);
      border-radius: 5px;
      padding: 5px;
      width: 100%;
    }
    label {
      padding-bottom: 5px;
      padding-left: 5px;
      font-weight: bold;
    }
    textarea:focus, input:focus{
      outline: 0.5px solid ${({ theme }) => theme.dark.hoverBlue}
    }
    //Contact form section ----------------
    .contact-form {
      flex-basis: 75%;
      border-right: 0.5px solid ${({ theme }) => theme.dark.border};
      padding-right: 20px;
    } 
    .contact-form-top {
      display: flex;
      gap: 10px;
      padding-bottom: 20px;

      & > div {
        flex-basis: 50%;
      }
    }

    #msg {
      width: 100%;
      height: 200px;
    } 
    
    .form-button {
      margin-top: 10px;
      padding: 10px 55px;
      border: 1px solid ${({ theme }) => theme.dark.bodyFont};
      background-color: inherit;
      border-radius: 5px;
      color: white;
      outline: none;
      font-weight: bolder;
      font-size: var(--font-base);
      text-align: center;
      display: flex;
      align-items: center;
      gap: 10px;

      svg {
        stroke-width: 1px;
      }
    }
    .form-button:hover {
      //background-color: ${({ theme }) => theme.dark.bodyFont};
      border: 1px solid ${({ theme }) => theme.dark.hoverBlue}; 

      svg {
        color: ${({ theme }) => theme.dark.hoverBlue}; 
      }
    }


    //Contact Info section ---------------------
    .contact-info {
      flex-basis: 25%;
      padding-left: 20px;
      align-self: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      font-size: .9em;

      img {
        border-radius: 50%;
        width: 175px;
        height: 175px;
        object-fit: cover; 
      }
      ul {
        width: 100%;
      }

      ul > *:not(:last-child) {
        border-bottom: 0.5px solid ${({ theme }) => theme.dark.border};
      }
      li {
        padding: 7px;
        color: ${({ theme }) => theme.dark.paragraphFont};
        display: flex;
        justify-content: flex-start;
      }
      svg {
        margin-right: 10px;
        fill: ${({ theme }) => theme.dark.hoverBlue};
        font-size: 1.2em;

      }
    }
    //Mobile
    @media(max-width: ${({ theme}) => theme.mobile}) {
      flex-direction: column;

      .contact-form{
        flex-basis: 100%;
        width: 100%;
        border-right: 0;
        padding: 0;
      }

      .contact-info{
        flex-basis: 100%;
        width: 100%;
        padding-top: 20px;

        img {
          display: none;
        }

        ul {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          align-items: center;

          li {
            width: 100%;
            justify-content: center;
          }

          & > *:not(:last-child) {
            border-bottom: 0;
            border-right: 0.5px solid ${({ theme }) => theme.dark.border};
          }
        }
      }
    }
  }

`