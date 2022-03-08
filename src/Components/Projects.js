import React from 'react';
import { StyledProjects } from './Styles/Projects.styled';
import { StyledContainer } from './Styles/Container.Styled';
import { StyledBorder } from './Styles/BorderWrapper.Styled';

const Projects = () => {
    return (
      <StyledProjects>
        <StyledContainer>
          <StyledBorder>
            <span className='title'><h2>Projects</h2></span>
            <div className='project-wrapper'>
              <article>
              <img src='./Media/ProjectExample.webp' alt='Project 1' />  
                <h3>Project 1</h3>
                <p className='article-skills'>React - Styled Componenets - HTML - CSS</p>
                <section className='article-description'>
                  <ul>
                    <li>Lorem ipsum dorae asdf asuie aiopas</li>
                    <li>Lorem ipsum dorae asuie aiopas Loreming asdf</li>
                    <li>Lorem ipsum  asuie aiopas</li>
                    <li>Lorem ipsum dorae asdf asuie aiopas lorensadf validiat manuiluas csuimvas</li>
                  </ul>  
                </section>
                <section className='article-links'>
                  <div>Github Link</div>
                  <div>Live Site</div>
                </section>
              </article>
              <article>
                <h3>Article 2</h3>
              </article>
            </div>
          </StyledBorder>
        </StyledContainer>
      </StyledProjects>
    )
}

export default Projects
