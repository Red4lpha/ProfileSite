import React from 'react'
import { StyledHeader } from './Styles/Header.Styled'

const Header = () => {
    return (
        <StyledHeader>
            <section className='logo'>
                logo
            </section>
            <nav>
                <ul>
                    <li><a href='/'>home</a></li>
                    <li><a href='/'>about</a></li>
                    <li><a href='/'>skills</a></li>
                    <li><a href='/'>projects</a></li>
                    <li><a href='/'>contact</a></li>
                </ul>
            </nav>
            <section className='social-icons'>
                social-icons
            </section>
        </StyledHeader>
    )
}

export default Header
