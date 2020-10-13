import React, { Component } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/img/logo/logo.png";
import "../assets/css/style.css";
import {
  Link as L,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

export default class header extends Component {
  render() {
    return (
      <div className="header-area header-transparrent ">
        <div className="main-header header-sticky">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-md-1">
                <div className="logo">
                  <L to="/">
                    <img src={Logo} alt="logo" />
                  </L>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-8">
                <div className="main-menu f-right d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <L to="/">Home</L>
                      </li>
                      <li>
                        <a href="#">About us</a>
                        <ul className="submenu">
                          <li>
                            <Link to="who we are">Who we are</Link>
                          </li>
                          <li>
                            <L to="/v">Our Vision & Mission</L>
                          </li>
                          <li>
                            <L to="/why">Why Us</L>
                          </li>
                          <li>
                            <L to="/w">Work With Us</L>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Services</a>
                        <ul className="submenu">
                          <li>
                            <L to="/Medical">Medical Education</L>
                          </li>
                          <li>
                            <L to="/Bsc">BSC Nursing</L>
                          </li>
                          <li>
                            <L to="/ILETS">Science & Technology</L>
                          </li>
                          <li>
                            <L to="/Stech">IELTS Exam Registration</L>
                          </li>
                          <li>
                            <L to="/Test">Test Preparation</L>
                          </li>
                          <li>
                            <L to="/Study">Study Abroad</L>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="contact.html">Gallery</a>
                        <ul className="submenu">
                          <li>
                            <a href="elements.html">Photo Gallery</a>
                          </li>
                          <li>
                            <a href="elements.html">Video Gallery</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="newsevents">News & Events</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3">
                <div className="header-right-btn f-right d-none d-lg-block">
                  <a href="#" className="btn header-btn">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
