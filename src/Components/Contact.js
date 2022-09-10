import { StyledContact } from './Styles/Contact.styled';
import { StyledContainer } from './Styles/Container.Styled';
import { StyledBorder } from './Styles/BorderWrapper.Styled';
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineAim} from "react-icons/ai";
import { BsArrowRightCircle } from "react-icons/bs";
import emailjs from 'emailjs-com';

const Contact = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)

    emailjs.sendForm('gmail', 'template_icx9n4e', e.target, 'Z3pSJNxwtQ3KdHY2m')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
  }
  return (
    <StyledContact>
      <StyledContainer>
          <StyledBorder>
          <span className='title'><h2>CONTACT ME</h2></span>
          <div className='contact-wrapper'>
            <form onSubmit={handleSubmit} className='contact-form'>
              <h3>Send me a message</h3>
              <div className='contact-form-top'>
                <div>
                  <label for='name'>Name</label>
                  <input name='name' type='text' for='name' id='name' placeholder='your name...' required></input>
                </div>
                <div>
                  <label for='email'>Email</label>
                  <input name='email' type='email' for='email' id='email' placeholder='your email...' required></input>
                </div>
              </div>
              <label for='msg'>Message</label>
              <textarea name='msg' type='text' for='msg' id='msg' placeholder='your message...' required></textarea>
              <button className='form-button button' type='submit'>
                <span>Send</span>
                <BsArrowRightCircle /> 
              </button>
            </form>
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
