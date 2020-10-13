import React from "react";
import '../assets/css/style.css'

export default function appointment() {
  return (
    <div className="have-project">
      <div className="container">
        <div
          className="haveAproject"
          data-background="#"
        >
          <div className="row d-flex align-items-center">
            <div className="col-xl-7 col-lg-9 col-md-12">
              <div className="wantToWork-caption">
                <h2>Request Your Free appointment</h2>
                <p>
                  One of our highly trained education counselor’s will be in
                  touch to discuss your study goal.
                </p>
              </div>
            </div>
            <div className="col-xl-5 col-lg-3 col-md-12">
              <div className="wantToWork-btn f-right">
                <a href="#" className="btn btn-ans">
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
