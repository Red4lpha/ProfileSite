import React, { useEffect } from 'react'
import { StyledHeader, StyledNav, StyledMobileMenu } from './Styles/Header.Styled'
import { StyledSocialIcons } from './Styles/SocialIcons.Styled'
import { NavButtons } from './NavButtons'
import { SocialIcons } from './SocialIcons'

const Header = ({ setHeaderHeight }) => {
	const headerRef = React.createRef();
	
	useEffect(() => {
		//console.log(headerRef.current.clientHeight);
		//console.log(headerRef);
		setHeaderHeight(headerRef.current.clientHeight);
	});
	/*
	Todo Mobile:
	!TODO: Create nav and social components
	TODO: create mobile cut off: @media min theme->mobile
	!TODO: Create absolute position elements with new ul li of the nav
	!TODO: Make it flex down, centered, and hover effect
	TODO: Add media icons

	TODO: Media cut off remove nav and social icons - put hamburger
	
	TODO: Add onclick functionality to hamburger
		TODO: put on hamburger div
		TODO: add handleMobileClick to this header component
		TODO: either add visibility via class manipulation 
		TODO: and React Refs
		TODO: Or possibility using a boolean within React to show or hide components
	
	TODO: Handle mobile click to close mobile menu on clicking any of the icons
		TODO: Optional: Handle outside click to auto close as well	

	TODO: When hamb is open replaced with X
		TODO: Optional use an animation	 
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
			<StyledMobileMenu>
				<NavButtons />
			</StyledMobileMenu>
		</StyledHeader>
	)
}

export default Header
