import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Service from "../Components/Service/Service";
import ImgSlider from "../Components/ImgSlider/ImgSlider";
import ClientSlide from "../Components/ClientSlide/ClientSlide";
import NewsSection from "../Components/NewsSection/NewSection";
import LogoSlider from "../Components/LogoSlider/LogoSlider";
import Social from "../Components/Social/Social";


function Home() {

  return (
    <>
      <Navbar></Navbar>
      <Hero ></Hero>
      <LogoSlider></LogoSlider>
      <About></About>
      <Service></Service>
      <ImgSlider></ImgSlider>
      <ClientSlide></ClientSlide>
      <NewsSection></NewsSection>
      <Social></Social>
      <Footer></Footer>
    </>
  );
}

export default Home;
