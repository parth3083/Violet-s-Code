import React from "react";
import image1 from "../assets/chair_1.png";
import image2 from "../assets/chair_2.png";
import image3 from "../assets/chair_3.png";
import image4 from "../assets/chair_4.png";
import image5 from "../assets/p_chair.png";
function Comic_Chair() {
  const data = [{ img: image1 }, { img: image2 }, { img: image2 }];
  const data_1 = [{ img: image2 }, { img: image3 }, { img: image4 }];
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
          <img src={image5} className=" scale-75 -translate-y-36" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Comic_Chair;
