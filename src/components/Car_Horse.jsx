import React from "react";
import image1 from "../assets/back_horse.png";
import image2 from "../assets/car_2x.png";
import image3 from "../assets/horse_2x.png";
import image4 from "../assets/paul.png";
import image5 from "../assets/violet.png";
import { motion } from "framer-motion";
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
      <motion.div className="horse w-[45%] h-[150vh]  absolute left-1/2 -translate-x-1/2 bottom-52">
        <motion.img
          src={image3}
          initial={{ scale: 0.25 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full object-contain"
          alt=""
        />
      </motion.div>

      <motion.div
        initial={{ y: 300 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="paul w-[33%] h-[100vh] bottom-[30vw] ml-5 absolute  flex gap-5 flex-col items-center"
      >
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
      </motion.div>
      <motion.div
        initial={{ y: 300 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="violet w-[33%] h-[100vh] right-0 bottom-[30vw] mr-5 absolute  flex gap-5 flex-col items-center"
      >
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
      </motion.div>
    </div>
  );
}

export default Car_Horse;
