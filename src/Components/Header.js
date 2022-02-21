import React, { useEffect, useState } from 'react'
import { StyledHeader,StyledHeaderWrapper ,StyledNav, StyledMobileMenu, StyledMobileButton } from './Styles/Header.Styled'
import { StyledSocialIcons } from './Styles/SocialIcons.Styled'
import { NavButtons } from './NavButtons'
import { SocialIcons } from './SocialIcons'
import { MobileNav } from './MobileNav'
import { StyledContainer } from './Styles/Container.styled'

const Header = ({ setHeaderHeight }) => {
	const headerRef = React.createRef();
	const mobileMenu = React.createRef();
	const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
	
	useEffect(() => {
		setHeaderHeight(headerRef.current.clientHeight);
	});

	useEffect(() => {
		//Listener for clicks outside the mobile menu to close it
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
	---------------------------------------------------------------
	TODO: NAV
	TODO: Implement breakpoint nav links
	TODO: Implement animation scroll so it looks nice
	TODO: Updated social media links
	TODO: Need to create logo based off figma design
	TODO: Ensure that the mobile and normal menu are same height(probably based off logo)
	*/

	return (
	
		<StyledHeader ref={headerRef}>
			<StyledContainer>
				<StyledHeaderWrapper>
					<section className='logo'>
						logo
					</section>
					<StyledNav>	
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
				</StyledHeaderWrapper>
			</StyledContainer>
		</StyledHeader>
	)
}

export default Header
