import React from "react";
import Logo from "../assets/img/logo/logo.png";
import '../assets/css/style.css'
export default function preloader() {
  console.log("logo",Logo)
  return (
    <div id="preloader-active">
      <div className="preloader d-flex align-items-center justify-content-center">
        <div className="preloader-inner position-relative">
          <div className="preloader-circle"></div>
          <div className="preloader-img pere-text">
            <img src={Logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
