import React from 'react'
import { HomeIntroStyled } from './Styles/HomeIntro.Styled'

const HomeIntroductory = ({ headerHeight }) => {
  return (
    <HomeIntroStyled headerHeight={headerHeight}>
      <h1>
        {/* /* TODO: Change size and font size color to have linear effect */ }
        Kevin Shields
      </h1>
      <h2>
        {/* TODO: Animated style for description of me */ }
        Web Developer
      </h2>
    </HomeIntroStyled>
  )
}

export default HomeIntroductory
