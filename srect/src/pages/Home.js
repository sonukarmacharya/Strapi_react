import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Slider from "../components/slider";
import Footer from "../components/footer";
import Body from "../components/Body";
import Body2 from "../components/Body2";
import Testimonial from "../components/testimonial";
import Newsevents from "../components/newsevents";
import Appointment from "../components/appointment";
import Loader from "../components/preloader";
import "../assets/css/bootstrap.min.css";
import "../assets/scss/style.scss";
const Home = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header />
          <Slider />
          <Body />
          <Body2 />
          <Testimonial />
          <Newsevents />
          <Appointment />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
