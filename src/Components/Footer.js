import { StyledContainer } from './Styles/Container.Styled';
import { StyledFooter } from './Styles/Footer.Styled';
import { StyledSocialIcons } from './Styles/SocialIcons.Styled'
import { SocialIcons } from './SocialIcons'
import { BsFileArrowUp } from "react-icons/bs";


const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <div className='footer'>
        <span>Kevin Shields</span>
        <BsFileArrowUp className='footer-nav-up'/>
        <StyledSocialIcons>
						<SocialIcons />
        </StyledSocialIcons>   
        </div>
      </StyledContainer>
    </StyledFooter>
  )
}

export default Footer
