import React from "react";
import Logo from "../assets/img/logo/logo.png";
import "../assets/css/style.css";
import {
  Link as L,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
export default function footer() {
  return (
    <div
      className="footer-main"
      data-background="assets/img/shape/footer_bg.png"
    >
      <div className="footer-area footer-padding">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-lg-3 col-md-4 col-sm-8">
              <div className="single-footer-caption mb-50">
                <div className="single-footer-caption mb-30">
                  {/* <!-- logo --> */}
                  <div className="footer-logo">
                    <a href="index.html">
                      <img src={Logo} />
                    </a>
                  </div>
                  <div className="footer-tittle">
                    <div className="footer-pera">
                      <b>Orbit Medical Entrance Preparation</b>
                      <p className="info1">
                        Putalisadak, Kathmandu, Nepal
                        <br />{" "}
                      </p>

                      <p className="info5"> Phone: +977-1-4433231, 4420530 </p>

                      <p className="info2">
                        Email: info@orbitmbbs.com
                        <br />
                        Web: www.orbitmbbs.com
                      </p>
                    </div>
                  </div>
                  <div className="footer-social">
                    <a href="https://fb.com/palsnet">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-5">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Quick Links</h4>
                  <ul>
                    <li>
                      <L to="#">About</L>
                    </li>
                    <li>
                      <L to="#">Services</L>
                    </li>
                    <li>
                      <L to="#">Packages</L>
                    </li>
                    <li>
                      <L to="#">News & Events</L>
                      <a href="blog.html"></a>
                    </li>
                    <li>
                      <L to="#">Contact</L>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-7">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Support</h4>
                  <ul>
                    <li>
                      <L to="#">Privacy Policy</L>
                    </li>
                    <li>
                      <L to="#">Terms & Conditions</L>
                    </li>
                    <li>
                      <L to="#">Sitemap</L>
                    </li>
                    <li>
                      <L to="#">FAQs</L>
                    </li>
                    <li>
                      <L to="#">News & Events</L>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-5">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Services</h4>
                  <ul>
                    <li>
                      <L to="/Medical">Medical Education</L>
                    </li>
                    <li>
                      <L to="/Bsc">BSC Nursing</L>
                    </li>
                    <li>
                      <L to="/Stech">Science & Technology</L>
                    </li>
                    <li>
                      <L to="/ILETS">IELTS Exam Registration</L>
                    </li>
                    <li>
                      <L to="/Test">Test Preparation</L>
                    </li>
                    <li>
                      <L to="/Study">Study Abroad</L>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer-bottom aera --> */}
      <div className="footer-bottom-area footer-bg">
        <div className="container">
          <div className="footer-border">
            <div className="row d-flex align-items-center">
              <div className="col-xl-12 ">
                <div className="footer-copy-right text-center">
                  <p>
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                    Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    ORBIT Medical Entrance Preparation. All rights reserved
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <!-- We Create End -->
  );
}
