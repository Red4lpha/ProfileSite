import React from 'react'
import { StyledWelcome, StyledWelcomeWrapper } from './Styles/Welcome.Styled'
import { StyledContainer } from './Styles/Container.Styled'

/* const TempStyle = styled.div`
  height: 80vh;
`; */

/* 
TODO: Insert actual image of me
TODO: Write up intro statement
TODO: Try different line spacing and maybe font
*/

const WelcomeSummary = () => {

  return (
    <StyledWelcome>
      <StyledContainer>
        <StyledWelcomeWrapper>
          <div>
            <img src='./Media/TestPhoto.jpg' alt='Portrait of Kevin' />
          </div>
          <div>
            <h2>Hello!</h2>
            <p>LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </StyledWelcomeWrapper>
      </StyledContainer>
    </StyledWelcome>
  )
}

export default WelcomeSummary
