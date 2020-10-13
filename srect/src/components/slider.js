import React, { Component } from "react";
import slider1 from "../assets/img/slider/slider-img-1.jpg";
import slider2 from "../assets/img/slider/slider2.jpg";
import slider3 from "../assets/img/slider/slider3.jpg";
import '../assets/css/style.css'
class slider extends Component {
  render() {
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          {/* <!-- Slide One - Set the background image for this slide in the line below --> */}
          <div className="carousel-item active">
            <img src={slider1} alt="slider" />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="display-4">
                The best way to predict <br />
                the future is to create it
              </h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider2} alt="slider" />

            <div className="carousel-caption d-none d-md-block">
              <h2 className="display-4">
                The best view comes after <br />
                the toughest climb
              </h2>
            </div>
          </div>
          {/* <!-- Slide Three - Set the background image for this slide in the line below --> */}
          <div className="carousel-item">
            <img src={slider3} alt="slider" />

            <div className="carousel-caption d-none d-md-block">
              <h2 className="display-4">
                Dreams don’t work <br />
                unless you do
              </h2>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
export default slider;
