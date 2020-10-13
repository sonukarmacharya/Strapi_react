import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/style.css";
const Testimonials = () => {
  const [test, setTest] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:1337/testimonials").then((response) => {
      console.log("test", response.data);
      setTest(response.data);
    });
  }, []);
  return (
    <div className="testimonial-area">
      <div className="container">
        <div className="testimonial-main">
          {/* <!-- Section-tittle --> */}
          <div className="row d-flex justify-content-center">
            <div className="col-lg-5  col-md-8 pr-0">
              <div className="section-tittle text-center">
                <h2> Tetimonials</h2>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10 col-md-9">
              <div className="h1-testimonial-active">
                {/* <!-- Single Testimonial --> */}
                <div className="single-testimonial text-center">
                  {test.map((data) => (
                    <div className="testimonial-caption ">
                      <div className="testimonial-top-cap">
                        <p>{data.Desc}</p>
                      </div>
                      {/* <!-- founder --> */}
                      <div className="testimonial-founder d-flex align-items-center justify-content-center">
                        <div className="founder-img">
                          <img src="#" alt="" />
                        </div>
                        <div className="founder-text">
                          <span>{data.Name}</span>
                          <p>{data.Address}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
