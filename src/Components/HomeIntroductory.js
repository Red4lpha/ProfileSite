import React from 'react'
import { HomeIntroStyled } from './Styles/HomeIntro.Styled'

const HomeIntroductory = ({ headerHeight }) => {
  return (
    <HomeIntroStyled headerHeight={headerHeight}>
      <h1>
        Kevin Shields
      </h1>
      <h2>
        Web Developer
      </h2>
    </HomeIntroStyled>
  )
}

export default HomeIntroductory
