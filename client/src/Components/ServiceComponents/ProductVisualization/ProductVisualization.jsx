import React from "react";
import style from "./ProductVisualization.module.css";
import { useOutletContext } from "react-router-dom";
import { productvisiualizationData } from "../../../assets/assets";
import { Link } from "react-router-dom";
import { useState } from "react";

function ProductVisualization() {
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
              <p>
                3D Product Visualization
              </p>
              <p>Bringing Products to Life in 3D</p>
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
            <p>3D modeling</p>
            <p>3D rendering</p>
            <p>Product rendering</p>
            <p>Architectural 3D</p>
            <p>3D visualization</p>
          </div>
          <div className="service_slide">
            <p>3D modeling</p>
            <p>3D rendering</p>
            <p>Product rendering</p>
            <p>Architectural 3D</p>
            <p>3D visualization</p>
          </div>
          <div className="service_slide">
            <p>3D modeling</p>
            <p>3D rendering</p>
            <p>Product rendering</p>
            <p>Architectural 3D</p>
            <p>3D visualization</p>
          </div>
          <div className="service_slide">
            <p>3D modeling</p>
            <p>3D rendering</p>
            <p>Product rendering</p>
            <p>Architectural 3D</p>
            <p>3D visualization</p>
          </div>
          <div className="service_slide">
            <p>3D modeling</p>
            <p>3D rendering</p>
            <p>Product rendering</p>
            <p>Architectural 3D</p>
            <p>3D visualization</p>
          </div>
        </div>
        <div className="service_main_slide2">
          <div className="service_slide2">
            <p>3D artist</p>
            <p>Interior renders</p>
            <p>Exterior renders</p>
            <p>3D animation</p>
            <p>Realistic renders</p>
          </div>
          <div className="service_slide2">
            <p>3D artist</p>
            <p>Interior renders</p>
            <p>Exterior renders</p>
            <p>3D animation</p>
            <p>Realistic renders</p>
          </div>
          <div className="service_slide2">
            <p>3D artist</p>
            <p>Interior renders</p>
            <p>Exterior renders</p>
            <p>3D animation</p>
            <p>Realistic renders</p>
          </div>
          <div className="service_slide2">
            <p>3D artist</p>
            <p>Interior renders</p>
            <p>Exterior renders</p>
            <p>3D animation</p>
            <p>Realistic renders</p>
          </div>
          <div className="service_slide2">
            <p>3D artist</p>
            <p>Interior renders</p>
            <p>Exterior renders</p>
            <p>3D animation</p>
            <p>Realistic renders</p>
          </div>
        </div>
      </div>

      {/* <!-- collaps section start  --> */}
      <div className="collaps_container">
        <p className="coll-first">
          Expert Product Visualization Services | Bring Products to Life
        </p>
        <p className="coll-second">
          Professional Product Visualization for Enhanced Customer Engagement
        </p>
        <p className="coll-third">
          Elevate your product presentation with our 3D product visualization
          services. Realistic, interactive, and immersive experiences.
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
              Transform Your Product Presentation with 3D Visualization
            </p>
            <p className="content-heading">
              Our product visualization services help you showcase products in
              stunning detail. Our expert artists craft 3D models, textures, and
              lighting to create immersive experiences.
            </p>

            <div className="content-block">
              <div className="content-block_container">
                <div className="content-block_heading">
                  <p className="content_list_heading">
                    Product Visualization Services:
                  </p>
                </div>
                <div className="content_block_list">
                  <ul>
                    <li>
                      <span>1.3D Modeling:</span> Accurate, detailed product
                      models
                    </li>
                    <li>
                      <span>2.Texture Mapping:</span> Realistic textures and
                      materials
                    </li>
                    <li>
                      <span>3.Lighting Simulation:</span> Realistic lighting
                      effects
                    </li>
                    <li>
                      <span>4.Animation:</span> Interactive product
                      demonstrations
                    </li>
                    <li>
                      <span>5.360-Degree Views:</span> Panoramic product views
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="content-block">
              <div className="content-block_container">
                <div className="content-block_heading">
                  <p className="content_list_heading">
                    Industry-Specific Solutions:
                  </p>
                </div>
                <div className="content_block_list">
                  <ul>
                    <li>
                      <span>1.E-commerce:</span> Enhance online product
                      presentation
                    </li>
                    <li>
                      <span>2.Retail:</span> Create engaging in-store displays
                    </li>
                    <li>
                      <span>3.Manufacturing:</span> Visualize product design and
                      functionality
                    </li>
                    <li>
                      <span>4.Architecture:</span> Showcase building designs and
                      interiors
                    </li>
                    <li>
                      <span>5.Furniture:</span> Display furniture in realistic
                      environments
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
                      <span>1.Expertise:</span> Seasoned artists with industry
                      knowledge
                    </li>
                    <li>
                      <span>2.Quality:</span> High-resolution, realistic visuals
                    </li>
                    <li>
                      <span>3.Timeliness:</span> Quick turnaround, meeting
                      deadlines
                    </li>
                    <li>
                      <span>4.Affordability:</span> Competitive rates, flexible
                      packages
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="content_quite">
              <p>
                Get a quote for your product visualization project today!
                Contact us at vikashy263@gmail.com or +91 7455925669 to discuss
                your vision.
              </p>
              <p>FAQs:</p>
              <p>Q: What file formats do you provide?</p>
              <p>A: We provide OBJ, FBX, STL, and other formats.</p>
              <p>Q: How long does product visualization take?</p>
              <p>A: Turnaround times vary depending on project complexity.</p>
            </div>

            <div className="port_btn_container">
              <a href="/portfolio" className="port_btn">
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- service card  --> */}
      <div className="service_card_container" id="service_card_container">
        <div className="service_card_main">
          {productvisiualizationData.map((item, index) => (
            <div key={index} className="service_card_main_container">
              <div className="service_card_box_one service_box_comm">
                <Link to={item.link}>
                  <img src={item.img} className="blur-img" alt="" />
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

export default ProductVisualization;
