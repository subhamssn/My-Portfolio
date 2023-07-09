import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className='c-left'>

        <form className='form-items'>
            <input type="text" name='user_name' className='user' placeholder='Name' />
            <input type="email" name='user_email' className='user' placeholder='Email' />
            <textarea name="message"  placeholder='Message'></textarea>
            <input type="submit" value="send" className='button' />
        </form>

        <div className='c-blur'></div>
        
      </div>


      <div className='c-right'>
        <div className='i-name'>
          <span>Get In Touch</span>
          <span>Contact Me</span>
        </div>
      </div>

      
    </div>
  )
}

export default Contact
