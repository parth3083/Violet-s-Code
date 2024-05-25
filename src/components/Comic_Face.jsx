import React from 'react'
import image4 from "../assets/chair_4.png";
import image6 from "../assets/chair_6.png";
import image7 from "../assets/chair_7.png";
import image8 from "../assets/chair_8.png";
import image1 from "../assets/chair_5.png";
import image5 from "../assets/lj.png";
function Comic_Face() {
    const data = [{ img: image4 }, { img: image1 }, { img: image6 }];
    const data_1 = [{ img: image6 }, { img: image7 }, { img: image8 }];
  return (
    <div className="w-full h-[300vh] bg-red-500">
    <div className="comic1 w-full h-[75vh] bg-blue-500 flex overflow-x-hidden ">
      {data.map((items, index) => {
        return (
          <div className="card w-[45%] h-full flex-shrink-0  bg-violet-400">
            <img
              src={items.img}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        );
      })}
    </div>
    <div className="comic1 w-full h-[75vh] bg-yellow-500 flex overflow-x-hidden">
      {data_1.map((items, index) => {
        return (
          <div
            className={`card ${
              index == 0 ? "-ml-40" : ""
            }  w-[45%] h-full flex-shrink-0  bg-violet-400`}
          >
            <img
              src={items.img}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        );
      })}
    </div>
    <div className="comic_1 w-full h-[150vh]  bg-green-400 flex items-center justify-center radial-gradient-bg">
      <div>
        <img src={image5} className="  scale-90  -translate-y-36" alt="" />
      </div>
    </div>
  </div>
  )
}

export default Comic_Face