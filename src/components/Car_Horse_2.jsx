import React from 'react'
import image1 from "../assets/jessica.png"
import image2 from "../assets/lucien.png"
function Car_Horse_2() {
  return (
      <div className='w-full relative h-[25vh] bg-[#000010] '>
        <div className="paul w-[35%] h-[90vh] bottom-[1vw]   ml-52 absolute  flex gap-5 flex-col items-center">
        <div className="paul_image w-[25vw] h-[25vw]  ">
          <img src={image1} className="w-full h-full object-contain" alt="" />
        </div>

        <div className="paul_desc">
          <p className="hel font-medium text-3xl text-[#2FA1AD] text-center">
          The brains behind Valiant Technologies, Jessica Vance finds her fierce intellect and maternal instincts clashing as she confronts the harrowing task of preventing her son Paul from a catastrophic mistake.
          </p>
        </div>
      </div>
        <div className="paul w-[35%] h-[90vh] bottom-[1vw] right-0  mr-36 absolute  flex gap-5 flex-col items-center">
        <div className="paul_image w-[25vw] h-[25vw]  ">
          <img src={image2} className="w-full h-full object-contain" alt="" />
        </div>

        <div className="paul_desc">
          <p className="hel font-medium text-3xl text-[#2FA1AD] text-center">
          A renowned physicist on the brink of a groundbreaking discovery, Lucien Vance struggles to balance his work with the crisis threatening his family and the fate of humanity.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Car_Horse_2
//  