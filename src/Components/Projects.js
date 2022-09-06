import React, { useState, useEffect } from 'react';
import { StyledProjects } from './Styles/Projects.styled';
import { StyledContainer } from './Styles/Container.Styled';
import { StyledBorder } from './Styles/BorderWrapper.Styled';
import Project from './Project';
import projectList from './projectList';
import theme from './Styles/theme';

let mobileWidth = parseInt(theme.tablet);

const Projects = () => {
  const [numOfProjsDisplayed, setNumOfProjsDisplayed]  = useState(mobileWidth > window.innerWidth ? 1 : 2);
  const [projHolder, setProjHolder] = useState(projectList);
  const [visibleProjs, setVisibleProjs] = useState(projHolder.slice(0,numOfProjsDisplayed));
  
  const handleClick = (e) => {
    let tempArray = [...projHolder];
    
    //deters which btn was clicked
    if (e.target.id === 'btn-right') tempArray.push(tempArray.shift());
    else if (e.target.id === 'btn-left') tempArray.unshift(tempArray.pop());

    setProjHolder(tempArray);
    setVisibleProjs(projHolder.slice(0,numOfProjsDisplayed)); 
  }

  const handleWindowSizeChange = () => {
      setNumOfProjsDisplayed(mobileWidth > window.innerWidth ? 1 : 2);
      setVisibleProjs(projHolder.slice(0,numOfProjsDisplayed)); 
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

    return (
      <StyledProjects>
        <StyledContainer>
          <StyledBorder>
            <span className='title'><h2>PROJECTS</h2></span>
            <div className='project-wrapper'>
              <button className='project-buttons left' id='btn-left' onClick={handleClick}>&lt;</button>
              <button className='project-buttons right' id='btn-right' onClick={handleClick}>
                &gt; 
                </button>

              {visibleProjs.map(proj => 
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
