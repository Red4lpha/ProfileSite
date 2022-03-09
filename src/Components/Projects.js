import React from 'react';
import { StyledProjects } from './Styles/Projects.styled';
import { StyledContainer } from './Styles/Container.Styled';
import { StyledBorder } from './Styles/BorderWrapper.Styled';

const Projects = () => {
    return (
      <StyledProjects>
        <StyledContainer>
          <StyledBorder>
            <span className='title'><h2>PROJECTS</h2></span>
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
              <img src='./Media/ProjectExample2.webp' alt='Awesome Project 2' />  
                <h3>Awesome Project 2</h3>
                <p className='article-skills'>HTML - CSS - JS AWESOMENESS</p>
                <section className='article-description'>
                  <ul>
                    <li>Hey this is super awesome I have actual text</li>
                    <li>I used HTML, CSS, and JS to make this awesomeness</li>
                    <li>Dont you wish you can be as awesome as me</li>
                    <li>Use the awesome API to use some of my awesomeness from this site!</li>
                  </ul>  
                </section>
                <section className='article-links'>
                  <div>Github Link</div>
                  <div>Live Site</div>
                </section>
              </article>
            </div>
          </StyledBorder>
        </StyledContainer>
      </StyledProjects>
    )
}

export default Projects
