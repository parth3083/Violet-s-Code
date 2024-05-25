import React from "react";
import image1 from "../assets/author.png";
import { motion } from "framer-motion";

function Author() {
  return (
    <div className="w-full h-[120vh] bg-black px-10 flex overflow-hidden items-center">
      <div className="author_left w-[30%] h-[80%] flex items-center justify-center ">
        <motion.div
          initial={{ y: 150 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.2 }}
          className="w-[30vw] h-[30vw] "
        >
          <img src={image1} className="w-full h-full object-contain" alt="" />
        </motion.div>
      </div>
      <div className="author_right w-[70%]  py-10 pl-20 h-full flex flex-col items-center justify-between ">
        <motion.p
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.2 }}
          className=" font-raleway font-medium text-4xl text-[#2FA1AD] mt-36"
        >
          J.D. Paulsen is a Mexican-born, Brooklyn-based digital artist with
          over two decades of experience in the creative industry.{" "}
        </motion.p>
        <motion.p
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-[#EACD58] font-raleway font-medium text-4xl"
        >
          In 2019 he gained recognition when he was shortlisted for the World
          Illustration Award for his work on{" "}
          <span className=" italic">AlphaPod</span> , a children's learning app
          that earned a Webby Awards honoree spot in 2021.{" "}
        </motion.p>
        <motion.p
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-[#EACD58] font-raleway font-medium text-4xl"
        >
          Paulsen has collaborated as a digital illustrator with major companies
          such as Microsoft, Pixar, Disney, Netflix, Lucas Film, Marvel, and
          AMC. He’s the writer and illustrator of the graphic novel{" "}
          <span className=" italic">Violet’s Code</span>, currently under
          development.{" "}
        </motion.p>
      </div>
    </div>
  );
}

export default Author;
