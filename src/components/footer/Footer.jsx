import './Footer.css'
import WaveImg from '../../img/wave.png'
import GithubImg from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'

function Footer() {
  return (
    <div className='footer'>
        
        <div className='f-content'>
          <div className="social-icons">
             <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
               <img src={Linkedin} alt="LinkedIn" />
             </a>
             <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
               <img src={GithubImg} alt="GitHub" />
             </a>
          </div>

          <div className="email">
             <span>subhamsinghpg@gmail.com</span>
          </div>
        </div>
    </div>
  )
}

export default Footer
