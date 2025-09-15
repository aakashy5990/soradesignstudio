import React from "react";
import "./About.css";
import about_banner from "../../assets/About-banner.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about_container">
      <div className="about_head">
        <div className="main_about_head_container">
          <p>ABOUT</p>
        </div>
        <p className="who_im">WHO AM I ?</p>
      </div>
      <div className="about_main_container">
        <div className="about_img_container">
          <img src={about_banner} alt="" />
        </div>
        <div className="about_content_container">
          <p className="about_content_heading">
            I am Bold, Futuristic and Intentional
          </p>
          <p className="about_content_first_pera pera">
            At <span className="about_span_bold">SORA Design Studio</span>,
            creativity meets clarity. We're not just designers — we are
            storytellers crafting immersive visual experiences that connect
            brands to people. From{" "}
            <span className="about_span_bold">high-end 3D animation </span>and{" "}
            <span className="about_span_bold">product visualization</span> to{" "}
            <span className="about_span_bold">branding, video editing,</span>{" "}
            and <span className="about_span_bold">motion design,</span> we bring
            ideas to life with precision and flair.
          </p>
          <p className="about_content_second_pera pera">
            Every pixel we design serves a purpose. With a deep understanding of
            visual strategy and a passion for pushing boundaries, we deliver
            cutting-edge work that feels alive — fresh, functional, and
            future-forward.
          </p>

          <div className="about_btn_container">
            <div className="btn_container">
              <Link to="portfolio" className="dawnload_cv_btn">
                Portfolio
              </Link>
              <Link to="https://whatsform.com/4bj9mX\" className="hire_me_btn">
                HIRE SORA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
