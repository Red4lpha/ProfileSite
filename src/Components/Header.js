import React, { useEffect, useState } from 'react'
import { StyledHeader, StyledNav, StyledMobileMenu, StyledMobileButton } from './Styles/Header.Styled'
import { StyledSocialIcons } from './Styles/SocialIcons.Styled'
import { NavButtons } from './NavButtons'
import { SocialIcons } from './SocialIcons'
import { MobileNav } from './MobileNav'

const Header = ({ setHeaderHeight }) => {
	const headerRef = React.createRef();
	const mobileMenu = React.createRef();
	const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
	
	useEffect(() => {
		setHeaderHeight(headerRef.current.clientHeight);
	});

	useEffect(() => {
    const listener = event => {
      if (!headerRef.current || headerRef.current.contains(event.target)) {
        return;
      }
      setMobileMenuOpened(false);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },[headerRef]);


	/*
	Todo Mobile:
	!TODO: Create nav and social components
	!TODO: create mobile cut off: @media min theme->mobile
	!TODO: Create absolute position elements with new ul li of the nav
	!TODO: Make it flex down, centered, and hover effect
	!TODO: Add media icons

	!TODO: Media cut off remove nav and social icons - put hamburger
	
	!TODO: Add onclick functionality to hamburger
		!TODO: put on hamburger div
		!TODO: add handleMobileClick to this header component
		!TODO: either add visibility via class manipulation 
		!TODO: and React Refs
		!TODO: Or possibility using a boolean within React to show or hide components
	
	!TODO: Handle mobile click to close mobile menu on clicking any of the icons
		!TODO: Optional: Handle outside click to auto close as well	

	!TODO: When hamb is open replaced with X
		!TODO: Optional use an animation	 
	---------------------------------------------------------------
	TODO: NAV
	TODO: Implement breakpoint nav links
		TODO: Implement animation scroll so it looks nice

	TODO: Updated social media links
	
	*/

	return (
	
		<StyledHeader ref={headerRef}>
			<section className='logo'>
				{/* TODO: Need to create logo based off figma design */}
				logo
			</section>
			<StyledNav>
				{/* TODO: Change li links to scroll to certain breakpoints */}
				{/* !TODO: Add mobile hamburger functionality */}
				<NavButtons />
			</StyledNav>
			<StyledSocialIcons>
				<SocialIcons />
			</StyledSocialIcons>
			<StyledMobileButton 
			onClick={() => setMobileMenuOpened(!mobileMenuOpened)} 
			mobileMenuOpened={mobileMenuOpened}>
				{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -7 24 24" width="32" fill="currentColor"><path d="M1 0h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm0 8h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm0-4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z"></path></svg> */}
				<div />
				<div />
				<div />
			</StyledMobileButton>
			<StyledMobileMenu ref={mobileMenu} 
			mobileMenuOpened={mobileMenuOpened}>
				<MobileNav/>
			</StyledMobileMenu>
		</StyledHeader>
	)
}

export default Header
