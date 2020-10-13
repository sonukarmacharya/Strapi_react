import React from "react";
import orbit from "../assets/img/about/orbit-mbbs.jpg"
import '../assets/css/style.css'
export default function body() {
  return (
    <div className="we-create-area create-padding">
      <div className="container">
        <div className="row d-flex align-items-end">
          <div className="col-lg-6 col-md-12">
            <div className="we-create-img">
              <img src={orbit} alt="#" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="we-create-cap">
              <h3>Welcome to Orbit</h3>
              <p>
                Orbit established in the year 2008 is one of the leading and
                most sought after institutes for Medical Entrance Preparation in
                the country. <br />
                Orbit MBBS Entrance programme provides students an exclusive
                opportunity to familiarize themselves with vital aspects and
                practical dimension to this learning.
              </p>

              <a href="about.html" className="btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
