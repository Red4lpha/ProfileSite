import styled from 'styled-components'

export const StyledHeader = styled.header`
	display: flex;
	margin: 0;
	/* padding: 10px 0; */
	justify-content: space-between;
	align-items: center;
	padding: 0 var(--size5);
	border-bottom: 1px solid ${({ theme }) => theme.dark.border};
`
export const StyledNav = styled.nav`
	ul {
		display: flex;
		justify-content: space-between;
		/* column-gap: 10px; */
		font-size: 1rem;
		text-transform: uppercase;
		margin: var(--size5);
	}
	li {
		padding: 0 var(--size5);
    }
	li:hover {
		color: ${({ theme }) => theme.dark.hover};
	}	

`