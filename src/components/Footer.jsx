import React from "react";

function Footer() {
  return (
    <div className="w-full h-[40vh] bg-black flex items-center justify-between px-10 text-white">
      <div className="footer_left w-[30%] h-full flex items-start justify-between py-10 flex-col font-raleway  ">
        <h1 className="text-white opacity-70 font-semibold uppercase text-6xl tracking-tighter">
          violet's code
        </h1>
        <h1 className="text-white opacity-70 font-medium uppercase text-2xl tracking-tight">
          the past will be our end
        </h1>
        <h1 className="text-white opacity-70 uppercase text-lg">
          {" "}
          <span className=" capitalize">copyright </span>&copy; j.d. paulson
          2024
        </h1>
      </div>
      <div className="footer_right  w-[30%] h-full  flex items-center">
        <div className="left w-[50%] h-full flex items-start  pl-10 gap-5 justify-center flex-col ">
          {["about", "progress", "contact"].map((items, index) => (
            <div className="flex items-start gap-10  text-white">
              <h2 className="font-raleway opacity-70 cursor-pointer hover:opacity-100 transition-all ease-in-out duration-300 font-medium text-3xl capitalize">
                {items}
              </h2>
            </div>
          ))}
        </div>
        <div className="right w-[50%] h-full flex items-start pl-10 justify-center gap-10 flex-col  ">
          <h2 className="text-white opacity-70 hover:opacity-100 transition-all ease-in-out duration-300 cursor-pointer text-2xl font-raleway font-medium">
            jdpaulsen.com
          </h2>
          <h2>
            <i className="ri-instagram-line opacity-70 hover:opacity-100 transition-all ease-in-out duration-300 cursor-pointer text-white text-4xl"></i>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
