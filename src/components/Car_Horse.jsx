import React from "react";
import image1 from "../assets/back_horse.png";
import image2 from "../assets/car_2x.png";
import image3 from "../assets/horse_2x.png";
import image4 from "../assets/paul.png";
import image5 from "../assets/violet.png";
function Car_Horse() {
  return (
    <div
      style={{
        backgroundImage: `url(${image1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[150vh] bg-black mt-[40vh] relative"
    >
      <div className="w-full h-full absolute top-0">
        <img
          src={image2}
          className="w-full scale-75 h-full object-cover"
          alt=""
        />
      </div>
      <div className="horse w-[45%] h-[150vh]  absolute left-1/2 -translate-x-1/2 bottom-52">
        <img src={image3} className="w-full h-full object-contain" alt="" />
      </div>

      <div className="paul w-[33%] h-[100vh] bottom-[30vw] ml-5 absolute  flex gap-5 flex-col items-center">
        <div className="paul_image w-[25vw] h-[25vw]  ">
          <img src={image4} className="w-full h-full object-contain" alt="" />
        </div>

        <div className="paul_desc">
          <p className="hel font-medium text-3xl text-[#EACD58] text-center">
            A shy but brilliant genetic engineer, Paul Vance envisions radical
            solutions for Earth’s environmental crises. However, his life takes
            a dramatic turn when an unexpected encounte changes his path
            forever.
          </p>
        </div>
      </div>
      <div className="violet w-[33%] h-[100vh] right-0 bottom-[30vw] mr-5 absolute  flex gap-5 flex-col items-center">
        <div className="paul_image w-[25vw] h-[25vw]  ">
          <img src={image5} className="w-full h-full object-contain" alt="" />
        </div>

        <div className="paul_desc">
          <p className="hel font-medium text-3xl text-[#EACD58] text-center">
            Violet is a mysterious figure drawn into the complex orbit of the
            Vance family. Tasked with stopping Paul’s dark impulses, her mission
            becomes compromised as she grows close to him.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Car_Horse;
