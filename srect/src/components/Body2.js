import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/style.css";

const API_URL = "http://localhost:1337";
const Body2 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:1337/who-we-ares").then((response) => {
      console.log("body2", response.data);
      setData(response.data);
    });
  }, []);

  return (
    <div className="choose-best choose-padding" id="who we are">
      <div className="container">
        {/* <!-- Section-tittle --> */}
        <div className="row d-flex justify-content-center">
          <div className="col-lg-7">
            <div className="section-tittle text-center">
              <h2> Who We Are</h2>
            </div>
          </div>
        </div>
        <div className="row">
        {data.map((items) => (
          <div className="col-lg-4 col-md-6" key={items.Id}>
            <div className="single-choose active text-center mb-30">
              <div className="do-icon">
                <img src={`${API_URL}${items.Image.url}`} alt="" />
              </div>
              <div className="do-caption">
                <h4>{items.Title}</h4>
                <ul>
                  <p>{items.Desc}</p>
                </ul>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};
export default Body2;
