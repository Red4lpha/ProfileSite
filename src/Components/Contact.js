import { StyledContact } from './Styles/Contact.styled';
import { StyledContainer } from './Styles/Container.Styled';
import { StyledBorder } from './Styles/BorderWrapper.Styled';
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineAim} from "react-icons/ai";
import { BsArrowRightCircle } from "react-icons/bs";

const Contact = () => {
  return (
    <StyledContact>
      <StyledContainer>
          <StyledBorder>
          <span className='title'><h2>CONTACT ME</h2></span>
          <div className='contact-wrapper'>
            <section className='contact-form'>
              <h3>Send me a message</h3>
              <div className='contact-form-top'>
                <div>
                  <label for='name'>Name</label>
                  <input type='text' for='name' id='name' placeholder='your name...'></input>
                </div>
                <div>
                  <label for='email'>Email</label>
                  <input type='email' for='email' id='email' placeholder='your email...'></input>
                </div>
              </div>
              <label for='msg'>Message</label>
              <textarea type='text' for='msg' id='msg' placeholder='your message...'></textarea>
              <button className='form-button button'>
                <span>Send</span>
                <BsArrowRightCircle /> 
              </button>
            </section>
            <section className='contact-info'>
              <img src='./Media/TestPhoto.jpg' alt='Portrait of Kevin' /> 
              <ul>
                <li>
                  <AiOutlineMail />
                  myemail@email.com
                </li>
                <li>
                  <AiOutlineLinkedin />
                  Linkedin URL
                  </li>
                <li>
                  <AiOutlineAim />
                  San Diego
                </li>
              </ul>
            </section>
          </div>
          </StyledBorder>
      </StyledContainer>
    </StyledContact>
  )
}

export default Contact
