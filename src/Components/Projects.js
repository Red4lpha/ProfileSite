import React from 'react';
import { StyledProjects } from './Styles/Projects.styled';
import { StyledContainer } from './Styles/Container.Styled';
import { StyledBorder } from './Styles/BorderWrapper.Styled';
import Project from './Project';
import projectList from './projectList';

const Projects = () => {
    return (
      <StyledProjects>
        <StyledContainer>
          <StyledBorder>
            <span className='title'><h2>PROJECTS</h2></span>
            <div className='project-wrapper'>
              {projectList.map(proj => 
              <Project 
              img={proj.img}
              name={proj.name}
              tech={proj.tech}
              description={proj.description}
              codeLink={proj.codeLink}
              siteLink={proj.siteLink}    
              />)}
            </div>
          </StyledBorder>
        </StyledContainer>
      </StyledProjects>
    )
}

export default Projects
