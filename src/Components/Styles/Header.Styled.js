import styled from 'styled-components'

export const StyledHeader = styled.header`
	display: flex;
	margin: 0;
	/* padding: 10px 0; */
	justify-content: space-between;
	align-items: center;
	padding: 0 var(--size5);
	border-bottom: 0.5px solid ${({ theme }) => theme.dark.border};
`
export const StyledNav = styled.nav`
	ul {
		display: flex;
		justify-content: space-between;
		/* column-gap: 10px; */
		font-size: 1rem;
		text-transform: uppercase;
		margin: var(--font-xl);
	}
	li {
		padding: 0 var(--font-xl);
    }
	li:hover {
		color: ${({ theme }) => theme.dark.hover};
	}	

	@media(max-width: ${({ theme}) => theme.mobile}) {
		display: none;
	}
`

//Mobile Styles
export const StyledMobileButton = styled.section`
	display: none;
	
	svg{
		width: var(--font-4xl);
	}

	@media(max-width: ${({ theme}) => theme.mobile}) {
		display: inherit;
	}
`

export const StyledMobileMenu = styled.nav`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	font-size: var(--font-2xl);
	text-transform: uppercase;
	display: ${({ mobileMenuOpened }) => mobileMenuOpened ? 'block' : 'none'};
	
	ul {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	li {
		display: inline-block;
		flex-basis: 100%;
		padding: .75rem 0;
	}
	li:not(:last-child):hover {
		color: ${({ theme }) => theme.dark.hover};
	}
	//social icons - specially for mobile nav
	.social-icons svg {
		width: var(--font-3xl);
	}
	.social-icons a:not(:last-child) {
		margin-right: var(--font-xl);
	}
	.social-icons svg:hover {
		color: ${({ theme }) => theme.dark.hover};
	} 
	
`