import React from 'react'
import image1 from "../assets/book_cover.jpg"

function Book() {
  return (
      <div className='w-full h-[90vh]'>
          <img src={ image1} className='w-full h-full object-cover' alt="" />
    </div>
  )
}

export default Book