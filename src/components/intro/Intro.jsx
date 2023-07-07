import './intro.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boyy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesemoji from '../../img/glassesimoji.png'
import FloatingDiv from '../floatingDiv/FloatingDiv';

function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
            <span>Hy! I Am</span>
            <span>Subham Singh</span>
            <span>Frontend Developer with high
                level of experience in web designing
                and development, producting the Quality Work
            </span>
        </div>
        
        <button className="button i-button">Hire Me</button>

        <div className='i-icons'>
            <a href="https://github.com/subhamssn" target='_blank'>
            <img src={Github} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/subhamsingh223/">
            <img src={Linkedin} alt="" />
            </a>
            
        </div>

        
      </div>

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesemoji} alt="" />
       <div style={{top: '-1%', left: '40%'}}>
        <FloatingDiv image={Crown} text1="Web" text2="Developer"/>
       </div>
       <div style={{bottom: '12%', left: '-12%'}}>
        <FloatingDiv image={thumbup} text1="Best Design" text2="Award"/>
       </div>

       <div className='blur' style={{
        zIndex: '-9'
       }}></div>

       
       <div className='blue-blur' 
       style={{
        background: '#c1F5FF',
        top: '19rem',
        width: '21rem',
        height: '11rem',
        left: '-15rem',
        filter: 'blur(65px)',
        zIndex: '-9'
        

        
       }} ></div>
       
      </div>
      
    </div>
  )
}

export default Intro
