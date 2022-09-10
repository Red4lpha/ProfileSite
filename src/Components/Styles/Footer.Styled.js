import styled from "styled-components";

export const StyledFooter = styled.footer`
  border-top: 0.5px solid ${({ theme }) => theme.dark.border};
  margin-top: 50px;

  div.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    span {
      font-weight: bold;
    }
    svg.footer-nav-up {
      width: 50px;
      height: 50px;
      
    }
  }

`