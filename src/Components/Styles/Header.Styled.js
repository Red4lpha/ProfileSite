import styled from 'styled-components'

export const StyledHeader = styled.header`

	border-bottom: 0.5px solid ${({ theme }) => theme.dark.border};
`
export const StyledHeaderWrapper = styled.div`
	display: flex;
	margin: 0;
	/* padding: 10px 0; */
	justify-content: space-between;
	align-items: center;
	padding: 0 var(--size5); 
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
		display: flex;
		flex-direction: column;
		gap: 5px;
		padding: 10px 0;
	}

	div {
		width: 2rem;
		height: .25rem;
		background-color: ${({ theme }) => theme.dark.border};
		border-radius: 10px;
		transition: all 0.3s linear;
    position: relative;
    transform-origin: 3px;

		:first-child {
			transform: ${({ mobileMenuOpened }) => mobileMenuOpened ? 'rotate(45deg)' : 'rotate(0)'};
		}
		:nth-child(2) {
      opacity: ${({ mobileMenuOpened }) => mobileMenuOpened ? '0' : '1'};
      transform: ${({ mobileMenuOpened }) => mobileMenuOpened ? 'translateX(20px)' : 'translateX(0)'};
    }
		:nth-child(3) {
			transform: ${({ mobileMenuOpened }) => mobileMenuOpened ? 'rotate(-45deg)' : 'rotate(0)'};
		}

	}
`

export const StyledMobileMenu = styled.nav`
	position: absolute;
	top: 100%;
	width: 100%;
	left: 0;
	font-size: var(--font-2xl);
	text-transform: uppercase;
	display: ${({ mobileMenuOpened }) => mobileMenuOpened ? 'block' : 'none'};
	transition: transform 0.3s ease-in-out;
	
	@media (min-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }

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