import React from 'react'

function Navbar() {
  return (
    <div className='w-full h-[8vh] bg-black flex items-center justify-between px-10'>
      <div className="nav-left cursor-pointer">
        <h1 className=' font-raleway tracking-tighter uppercase text-[#2FA1AD] font-semibold text-3xl'>violet's code</h1>
      </div>
      <div className="nav-right flex items-center cursor-pointer gap-8 ">
        {["about", "progress", "contact"].map((items, index) => {
          return <div className='flex items-center gap-3 text-white'>
            <h2 className='font-raleway font-medium text-3xl capitalize'>{items }</h2>
          </div>
        })}
        <h2><i className="ri-instagram-line text-white text-4xl"></i></h2>
      </div>
    </div>
  )
}

export default Navbar