import React from "react";
import video1 from "../assets/ipad.mp4";

function Ipad() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-black">
      <video
        autoPlay
        muted
        src={video1}
        className="w-full h-full z-[9999] overflow-visible object-cover"
      />
    </div>
  );
}

export default Ipad;
