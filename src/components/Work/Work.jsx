import './Work.css'
import Upwork from '../../img/Upwork.png'
import Shopify from '../../img/Shopify.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Facebook from '../../img/Facebook.png'

function Work() {
  return (
    <div className="works">
        <div className="s-left w-left">
          <span>Works for All these</span>
          <span>Brands & Clients</span>
          <span>I genuinely work having full concentration 
            and provide the definitely required work.
          </span>

          <button className='button s-button'>Download CV</button>
        </div>

        <div className='w-right'>
            <div className='w-mainCircle'>
                <div className='w-secCircle'>
                    <img src={Upwork} alt="" />
                </div>

                <div className='w-secCircle'>
                    <img src={Fiverr} alt="" />
                </div>

                <div className='w-secCircle'>
                    <img src={Shopify} alt="" />
                </div>

                <div className='w-secCircle'>
                    <img src={Facebook} alt="" />
                </div>

                <div className='w-secCircle'>
                    <img src={Amazon} alt="" />
                </div>
            </div>
            <div className='w-backCircle blueCircle'></div>
            <div className='w-backCircle yellowCircle'></div>
        </div>

       
    </div>
  )
}

export default Work
