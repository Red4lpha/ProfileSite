import React from 'react'
import { StyledSkills } from './Styles/Skills.Styled';
import { StyledContainer } from './Styles/Container.Styled';
import { StyledBorder } from './Styles/BorderWrapper.Styled';

const Skills = () => {
  return (
    <StyledSkills>
      <StyledContainer>
        <StyledBorder>
          <span className='title'><h2>SKILLS</h2></span>
            <div className='skills-wrapper'>
            <div className='box'>
            </div>
            <div className='box'>
            </div>
            <div className='box'>
            </div>
          </div>
          <div className='skills-wrapper'>
            <div className='box'>
            </div>
            <div className='box'>
            </div>
            <div className='box'>
            </div>
        </div>
        </StyledBorder>
      </StyledContainer>
    </StyledSkills>
  )
}

export default Skills
