import './Services.css';
import heartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png';
import Chakra from '../../img/humble.png'
import ServiceCard from '../serviceCard/ServiceCard';


function services() {
  return (
    <div className="services">
        <div className="s-left">
          <span>My Awesome</span>
          <span>Services</span>
          <span>I genuinely work having full concentration 
            and provide the definitely required work.
          </span>

          <button className='button s-button'>Download CV</button>
          <div className='blur'
          style={{
            left: "50rem"
          }}>

          </div>

        </div>

        <div className="s-right">
            <ServiceCard image={heartEmoji} pText="Design" 
            sText="HTML5, Javascript, CSS3, React.js" />

            <ServiceCard image={Glasses} pText="Development" 
            sText="Node.js, Express.js, MongoDB, Authentication" />

            <ServiceCard image={Chakra} pText="Strategist" 
            sText="Client Handling, Product Prototyping, Analysis" />
        </div>

        
      
    </div>
  )
}

export default services
