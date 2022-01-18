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

`
export const StyledMobileMenu = styled.nav`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	font-size: var(--font-2xl);
	
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
	li:hover {
		color: ${({ theme }) => theme.dark.hover};
	}	
`