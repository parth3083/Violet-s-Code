import React from 'react'
import image1 from "../assets/comic_book.png"

function Comic_Bokk() {
  return (
    <div className='w-full h-[200vh] bg-black flex p-5 items-center justify-center'>
      <div className="image-container w-full h-full ">
        <img src={ image1} className='w-full h-full object-contain scale-100' alt="" />
      </div>
    </div>
  )
}

export default Comic_Bokk