import styled from "styled-components";

export const StyledWelcome = styled.section`
  padding: var(--font-4xl) 0;
`
export const StyledWelcomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  //align-items: stretch;
  //gap: 30px;

  & > div {
    //flex-basis: 50%;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    flex-grow: 1;
  }
  .photo-container {
    align-self: stretch;
    margin: auto 0;
    flex-shrink: 0;
    flex-basis: 50%;
  }

  img {
    border-radius: 50%;
 /*    height: 100%;
    min-height: 100%;
    min-width: 100%; */
    width: 370px;
    height: 370px;
    object-fit: cover;
    //float: right;
  }
  
  h2 {
    font-size: var(--font-3xl);
    padding-bottom: 20px;
  }
  p {
    font-size: var(--font-base);
  }

  //Mobile
  @media(max-width: ${({ theme}) => theme.tablet}) {
		flex-direction: column;

    img {
    height: 100%;
    min-height: 100%;
    min-width: 100%; 
    width: 100%;
    }
  
	}

`