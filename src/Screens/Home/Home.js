import React from "react";
import "./Home.scss";
import Header from "../../Layouts/Header/Header";
import Slider from "../../Layouts/Slider/Slider";
import Footer from "../../Layouts/Footer/Footer";
import Show from "./Show/Show";
import Information from "./Information/Information";

const Home = () => {
  return (
    <>
      <Header />

      <Slider />

      <Show />

      <Information />

      <Footer />
    </>
  );
};

export default Home;
