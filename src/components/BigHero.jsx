import React from "react";
import image1 from "../assets/background.jpg";
import Navbar from "../components/Navbar";
import image2 from "../assets/chopper.png";
import Car_Horse from "./Car_Horse";
import Car_Horse_2 from "./Car_Horse_2";
import Train from "./Train";
import Comic_Chair from "./Comic_Chair";
import Comic_Face from "./Comic_Face";
import Comic_Bokk from "./Comic_Bokk";
import Ipad from "./Ipad";
import Author from "./Author";
import Book from "./Book";
import Footer from "./Footer";
import LocomotiveScroll from "locomotive-scroll";

function BigHero() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div
      className="w-full h-[340vh]"
      style={{
        backgroundImage: `url(${image1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <div className="text1 w-full h-[60vh] relative  mt-[120vh] ">
        <div className="flex items-center  justify-center flex-col">
          <h1 className="hel text-[2.85vw] mt-20 font-regular uppercase text-white tracking-tighter">
            a new graphic model from j.d. paulsen, coming soon
          </h1>
          <h1 className="hel font-black uppercase text-[9.5vw] text-[#EACD58] -mt-10">
            violet's code
          </h1>
          <h1 className=" hel font-regular -mt-6 text-[2.85vw] text-white uppercase text-right ml-[30vw]">
            the past will be our end
          </h1>
        </div>
        <div className="chopper w-[40%] absolute -bottom-12 ml-3  h-[45vh] ">
          <img
            src={image2}
            className="w-full h-full scale-110  object-contain"
            alt=""
          />
        </div>
      </div>

      <div className="text2 w-full h-[42vh]  mt-36 gap-6 flex items-center flex-col ">
        <h1 className="hel w-[78%] text-5xl font-regular text-center text-[#EACD58]">
          A brilliant young scientist develops a radical plan to save Earth from
          an ecological disaster but falls for the woman on a mission to stop
          him.
        </h1>
        <h1 className="hel w-[90%] text-4xl font-regular text-center text-white">
          Violet's Code is a graphic novel exploring the ethical dilemmas of
          technology and survival amid a growing climate crisis. Targeting
          adults and young adults, it is currently in production and seeking
          publishing and distribution.
        </h1>
      </div>
      <Car_Horse />
      <Car_Horse_2 />
      <Train />
      <Comic_Chair />
      <Comic_Face />
      <Comic_Bokk />
      <Ipad />
      <Author />
      <Book />
      <Footer />
    </div>
  );
}

export default BigHero;
