import './ServiceCard.css'

function ServiceCard({image, pText, sText}) {
  return (
    <div className="service-card">
      
         <img src={image} alt="" />
         <span>
            {pText}
         </span>

         <span>
            {sText}
         </span>
         <button className='card-button'>Check</button>
         
         
      
    </div>
  )
}

export default ServiceCard
