import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

function Contact() {

    const form = useRef();

    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_80o4qor', 'template_d1dhtho', form.current, 'd5e0SAOtwkGc-eQtE')
        .then((result) => {
            setDone(true);
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };


  return (
    <div className='contact' >
      <div className='c-left'>

        <form className='form-items' ref={form} onSubmit={sendEmail}>
            <input type="text" name='user_name' className='user' placeholder='Name' />
            <input type="email" name='user_email' className='user' placeholder='Email' />
            <textarea name="message"  placeholder='Message'></textarea>
            <input type="submit" value="send" className='button c-button' />
        </form>

        <div className='c-blur'></div>
        
      </div>


      <div className='c-right'>
        <div className='i-name'>
          <span>Get In Touch</span>
          <span>Contact Me</span>
        </div>
        {done && <p>Message sent Successfully!</p>}
      </div>

      

      
    </div>
  )
}

export default Contact
