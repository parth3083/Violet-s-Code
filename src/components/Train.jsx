import React from 'react'
import image1 from "../assets/green.jpg"
import image2 from "../assets/subway_light.png"
import image3 from "../assets/subway.png"
import image4 from "../assets/train_bg.png"
import image5 from "../assets/train.png"
function Train() {
  return (
      <div
      style={{ 
        backgroundImage: `url(${image1})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
          className='w-full h-[200vh] bg-red-500 relative'>
          <div className="light w-full h-full absolute top-0">
              <img src={image2 } className='w-full h-full  object-cover'  alt="" />
          </div>
          <div className="light w-full h-full absolute top-0">
              <img src={image3} className='w-full h-full scale-100 object-cover'  alt="" />
          </div>
          <div className="light w-full h-full absolute top-0">
              <img src={image4} className='w-full h-full object-cover'  alt="" />
          </div>
          <div className="light w-full h-full absolute top-0">
              <img src={image5} className='w-full scale-95 h-full object-cover'  alt="" />
          </div>
          </div>
  )
}

export default Train