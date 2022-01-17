import styled from "styled-components";


export const HomeIntroStyled = styled.section`
  height: calc(100vh - ${({headerHeight}) => headerHeight + 'px'});
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`
/* TODO: Need CSS design for home animation */
