import React from "react";
import style from "./SocialMedia.module.css";
import { socialmediaData } from "../../../assets/assets";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

function SocialMedia() {
  const { isOpen, setIsOpen, toggle } = useOutletContext();
  const [popup, setPopup] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const handleshowpop = (videoUrl) => {
    setVideoSrc(videoUrl);
    setPopup(true);
  };

  return (
    <>
      <div className={style.intro_section} id="home">
        {/* <!-- ************* intro content section is start ****************** --> */}
        <div className="intro_content">
          <div className="intro_content_main">
            <div className="intro_text_content">
              <p>Scroll-Stopping Designs</p>
              <p>
              Making your brand shine on every feed
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- *************End intro content section ****************** -->

<!-- ******************logo slider section start ******************* --> */}
      <div className="service_main_slider_container">
        <div className="text_service_main_slide">
          <div className="text_service_slide">
            <p>Your</p>
            <p>Brand</p>
            <p>Is</p>
            <p>Your</p>
            <p>Voice.</p>
          </div>
          <div className="text_service_slide">
            <p>Your</p>
            <p>Brand</p>
            <p>Is</p>
            <p>Your</p>
            <p>Voice.</p>
          </div>
          <div className="text_service_slide">
            <p>Your</p>
            <p>Brand</p>
            <p>Is</p>
            <p>Your</p>
            <p>Voice.</p>
          </div>
          <div className="text_service_slide">
            <p>Your</p>
            <p>Brand</p>
            <p>Is</p>
            <p>Your</p>
            <p>Voice.</p>
          </div>
          <div className="text_service_slide">
            <p>Your</p>
            <p>Brand</p>
            <p>Is</p>
            <p>Your</p>
            <p>Voice.</p>
          </div>
        </div>

        <div className="service_main_slide">
          <div className="service_slide">
            <p>3D product animation</p>
            <p>Product visualization</p>
            <p>3D product demo</p>
            <p>3D motion graphics</p>
            <p>Product explainer</p>
          </div>
          <div className="service_slide">
            <p>3D product animation</p>
            <p>Product visualization</p>
            <p>3D product demo</p>
            <p>3D motion graphics</p>
            <p>Product explainer</p>
          </div>
          <div className="service_slide">
            <p>3D product animation</p>
            <p>Product visualization</p>
            <p>3D product demo</p>
            <p>3D motion graphics</p>
            <p>Product explainer</p>
          </div>
          <div className="service_slide">
            <p>3D product animation</p>
            <p>Product visualization</p>
            <p>3D product demo</p>
            <p>3D motion graphics</p>
            <p>Product explainer</p>
          </div>
          <div className="service_slide">
            <p>3D product animation</p>
            <p>Product visualization</p>
            <p>3D product demo</p>
            <p>3D motion graphics</p>
            <p>Product explainer</p>
          </div>
        </div>
        <div className="service_main_slide2">
          <div className="service_slide2">
            <p>3D product video</p>
            <p>Interactive 3D</p>
            <p>Product animation</p>
            <p>3D commercial</p>
            <p>Realistic product animation</p>
          </div>
          <div className="service_slide2">
            <p>3D product video</p>
            <p>Interactive 3D</p>
            <p>Product animation</p>
            <p>3D commercial</p>
            <p>Realistic product animation</p>
          </div>
          <div className="service_slide2">
            <p>3D product video</p>
            <p>Interactive 3D</p>
            <p>Product animation</p>
            <p>3D commercial</p>
            <p>Realistic product animation</p>
          </div>
          <div className="service_slide2">
            <p>3D product video</p>
            <p>Interactive 3D</p>
            <p>Product animation</p>
            <p>3D commercial</p>
            <p>Realistic product animation</p>
          </div>
          <div className="service_slide2">
            <p>3D product video</p>
            <p>Interactive 3D</p>
            <p>Product animation</p>
            <p>3D commercial</p>
            <p>Realistic product animation</p>
          </div>
        </div>
      </div>

      {/* <!-- collaps section start  --> */}
      <div className="collaps_container">
        <p className="coll-first">
          Social Media Design Services | Make Your Brand Stand Out
        </p>
        <p className="coll-second">
        Professional Social Media Graphics for Maximum Impact
        </p>
        <p className="coll-third">
        Elevate your online presence with stunning, scroll-stopping designs. From eye-catching posts to engaging stories and banners, we craft visuals that connect with your audience.
        </p>
        <div className="know_btn">
          <button
            type="button"
            className={`collapsible ${isOpen ? "active" : " "}`}
            onClick={toggle}
          >
            Know More
          </button>
          <div
            className="content"
            style={{ display: isOpen ? "block" : "none" }}
          >
            <p className="content-pera">
              Transform Your Online Identity with Engaging Designs
            </p>
            <p className="content-heading">
              Our social media design services help you build a memorable brand identity across platforms. With strategic creativity, we make sure your brand gets noticed and remembered.
            </p>

            <div className="content-block">
              <div className="content-block_container">
                <div className="content-block_heading">
                  <p className="content_list_heading">Social Media Design Services:</p>
                </div>
                <div className="content_block_list">
                  <ul>
                    <li>
                      <span>Post & Story Designs:</span> Custom graphics for Instagram, Facebook, and more
                    </li>
                    <li>
                      <span>Ad Creatives:</span> Compelling visuals that drive clicks and conversions
                    </li>
                    <li>
                      <span>Banner & Cover Designs:</span> Professional covers for Facebook, LinkedIn, YouTube
                    </li>
                    <li>
                      <span>Carousel Designs:</span> Seamless, engaging storytelling through multiple slides
                    </li>
                    <li>
                      <span>Event & Campaign Designs:</span> Festival, seasonal, and promotional creatives
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="content-block">
              <div className="content-block_container">
                <div className="content-block_heading">
                  <p className="content_list_heading">Industry-Specific Solutions:</p>
                </div>
                <div className="content_block_list">
                  <ul>
                    <li>
                      <span>Retail & E-commerce:</span> Sales, offers, and product highlight designs
                    </li>
                    <li>
                      <span>Corporate & B2B:</span> Professional, brand-consistent creatives
                    </li>
                    <li>
                      <span>Real Estate & Architecture:</span> Elegant property and project promotions
                    </li>
                    <li>
                      <span>FMCG & Lifestyle:</span> Trendy, vibrant designs to connect with youth
                    </li>
                    <li>
                      <span>Events & Launches:</span> Posters, invites, and digital campaign assets
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="content-block">
              <div className="content-block_container">
                <div className="content-block_heading">
                  <p className="content_list_heading">Why Choose Us:</p>
                </div>
                <div className="content_block_list">
                  <ul>
                    <li>
                      <span>Creativity:</span> Unique designs that stand out in the feed
                    </li>
                    <li>
                      <span>Strategy:</span> Design aligned with your brand goals
                    </li>
                    <li>
                      <span>Consistency:</span> Cohesive branding across platforms
                    </li>
                    <li>
                      <span>Speed:</span> Quick delivery to match your campaign schedules
                    </li>
                    <li>
                      <span>Affordability:</span> Flexible packages for businesses of all sizes
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="content_quite">
              <p>
                📩 Get a quote for your social media design project today! Contact us at
                {' '}vikashy263@gmail.com or +91 7455925669 to discuss your brand’s design needs.
              </p>
            </div>

            <div className="port_btn_container">
              <a
                href="/portfolio"
                className="port_btn"
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- service card  --> */}
      <div class="service_card_container" id="service_card_container">
        <div class="service_card_main">
          {socialmediaData.map((item, index) => (
            <div key={index} class="service_card_main_container">
              <div class="service_card_box_one service_box_comm">
                <Link to={item.link}>
                  <img src={item.img} class="blur-img" alt="" />
                </Link>
              </div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SocialMedia;
