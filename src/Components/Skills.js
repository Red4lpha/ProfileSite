import React from 'react'
import styled from 'styled-components';
import { StyledSkills } from './Styles/Skills.Styled';
import { StyledContainer } from './Styles/Container.Styled';

const TempStyle = styled.div`
  height: 70vh;
`;
const Skills = () => {
  return (
    <TempStyle>
      <StyledSkills>
        <StyledContainer>
          <div className='skills-wrapper'>
            <span><h2>SKILLS</h2></span>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
          </div>
        </StyledContainer>
      </StyledSkills>
    </TempStyle>
  )
}

export default Skills
