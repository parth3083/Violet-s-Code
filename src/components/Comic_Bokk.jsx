import React from "react";
import image1 from "../assets/comic_book.png";
import { motion } from "framer-motion";

function Comic_Bokk() {
  return (
    <div className="w-full h-[200vh] bg-black flex p-5 items-center justify-center">
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.2 }}
        className="image-container w-full h-full "
      >
        <img
          src={image1}
          className="w-full h-full object-contain scale-100"
          alt=""
        />
      </motion.div>
    </div>
  );
}

export default Comic_Bokk;
