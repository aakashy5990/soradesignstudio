import style from "./WebDesign.module.css";
import "./WebDesign.css";
import { WebDesignData } from "../../../assets/assets";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";

function WebDesign() {
  const { isOpen, setIsOpen, toggle } = useOutletContext();
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <>
      <div className={style.intro_section} id="home">
        {/* 
<!-- ************* intro content section is start ****************** --> */}
        <div className="intro_content">
          <div className="intro_content_main">
            <div className="intro_text_content">
              <p>Web Design That Works.</p>
              <p>
                Clean, user-friendly, and <br /> optimized for all devices.
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
            <p>Shape</p>
            <p>Your</p>
            <p>Digital</p>
            <p>Identity.</p>
          </div>
          <div className="text_service_slide">
            <p>Shape</p>
            <p>Your</p>
            <p>Digital</p>
            <p>Identity.</p>
          </div>
          <div className="text_service_slide">
            <p>Shape</p>
            <p>Your</p>
            <p>Digital</p>
            <p>Identity.</p>
          </div>
          <div className="text_service_slide">
            <p>Shape</p>
            <p>Your</p>
            <p>Digital</p>
            <p>Identity.</p>
          </div>
          <div className="text_service_slide">
            <p>Shape</p>
            <p>Your</p>
            <p>Digital</p>
            <p>Identity.</p>
          </div>
        </div>

        <div className="service_main_slide">
          <div className="service_slide">
            <p>Web Design</p>
            <p>Website Designer</p>
            <p>UI UX Design</p>
            <p>Responsive Design</p>
            <p>Custom Websites</p>
          </div>
          <div className="service_slide">
            <p>Web Design</p>
            <p>Website Designer</p>
            <p>UI UX Design</p>
            <p>Responsive Design</p>
            <p>Custom Websites</p>
          </div>
          <div className="service_slide">
            <p>Web Design</p>
            <p>Website Designer</p>
            <p>UI UX Design</p>
            <p>Responsive Design</p>
            <p>Custom Websites</p>
          </div>
          <div className="service_slide">
            <p>Web Design</p>
            <p>Website Designer</p>
            <p>UI UX Design</p>
            <p>Responsive Design</p>
            <p>Custom Websites</p>
          </div>
          <div className="service_slide">
            <p>Web Design</p>
            <p>Website Designer</p>
            <p>UI UX Design</p>
            <p>Responsive Design</p>
            <p>Custom Websites</p>
          </div>
        </div>
        <div className="service_main_slide2">
          <div className="service_slide2">
            <p>Modern Web Design</p>
            <p>Design Agency</p>
            <p>Creative Websites</p>
            <p>Business Website</p>
            <p>Mobile Web Design</p>
          </div>
          <div className="service_slide2">
            <p>Modern Web Design</p>
            <p>Design Agency</p>
            <p>Creative Websites</p>
            <p>Business Website</p>
            <p>Mobile Web Design</p>
          </div>
          <div className="service_slide2">
            <p>Modern Web Design</p>
            <p>Design Agency</p>
            <p>Creative Websites</p>
            <p>Business Website</p>
            <p>Mobile Web Design</p>
          </div>
          <div className="service_slide2">
            <p>Modern Web Design</p>
            <p>Design Agency</p>
            <p>Creative Websites</p>
            <p>Business Website</p>
            <p>Mobile Web Design</p>
          </div>
          <div className="service_slide2">
            <p>Modern Web Design</p>
            <p>Design Agency</p>
            <p>Creative Websites</p>
            <p>Business Website</p>
            <p>Mobile Web Design</p>
          </div>
        </div>
      </div>

      <div className="collaps_container">
        <p className="coll-first">
          Expert Web Design Services | Build Your Digital Identity
        </p>
        <p className="coll-second">
          Professional Website Design for Impactful Online Presence
        </p>
        <p className="coll-third">
          Elevate your brand with stunning, responsive web design. From strategy
          to screen, we craft digital experiences that convert.
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
              Transform Your Online Presence with Expert Web Design
            </p>
            <p className="content-heading">
              Our custom web design services help businesses stand out in the
              digital world. We craft visually stunning, user-friendly websites
              that engage visitors and drive results.
            </p>

            <div className="content-block">
              <div className="content-block_container">
                <div className="content-block_heading">
                  <p className="content_list_heading">Web Design Services:</p>
                </div>
                <div className="content_block_list">
                  <ul>
                    <li>
                      <span>1. Responsive Web Design:</span> Mobile-friendly,
                      fast-loading layouts across all devices
                    </li>
                    <li>
                      <span>2. UI/UX Design:</span> Seamless navigation and
                      intuitive user experiences
                    </li>
                    <li>
                      <span>3. Landing Page Design:</span> Conversion-optimized
                      pages for campaigns and promotions
                    </li>
                    <li>
                      <span>4. Custom Website Design:</span> Tailored visuals
                      aligned with your brand identity
                    </li>
                    <li>
                      <span>5. Website Redesign:</span> Modernize outdated sites
                      for better performance and aesthetics
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
                      <span>1. E-commerce:</span> Product-driven layouts that
                      convert browsers into buyers
                    </li>
                    <li>
                      <span>2. Corporate:</span> Professional websites for
                      companies and service providers
                    </li>
                    <li>
                      <span>3. Creative Portfolios:</span> Showcase your work
                      with bold, custom designs
                    </li>
                    <li>
                      <span>4. Real Estate:</span> Property listing designs with
                      map and contact integrations
                    </li>
                    <li>
                      <span>5. Startups & SaaS:</span> Scalable sites focused on
                      product and customer journey
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
                      <span>1. Expertise:</span> Experienced designers with
                      industry-best practices
                    </li>
                    <li>
                      <span>2. SEO-Friendly:</span> Structured for search
                      engines and high rankings
                    </li>
                    <li>
                      <span>3. Performance:</span> Fast-loading, optimized for
                      speed and performance
                    </li>
                    <li>
                      <span>4. Scalability:</span> Built to grow with your
                      business
                    </li>
                    <li>
                      <span>5. Support:</span> Ongoing maintenance and tech
                      support
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="content_quite">
              <p>
                Get a Quote Today! Ready to build or revamp your website?
                Contact us now to discuss your project: <br /> 📧
                vikashy263@gmail.com | 📞 +91 7455925669
              </p>
              <p>FAQs:</p>
              <p>Q: How long does it take to build a website?</p>
              <p>A: Timelines depend on scope, typically 1–4 weeks.</p>
              <p>Q: Will my website be mobile-friendly?</p>
              <p>
                A: Yes, every website is 100% responsive across all devices.
              </p>
              <p>Q: Do you offer SEO services?</p>
              <p>
                A: Yes, we offer basic on-page SEO optimization with every
                project.
              </p>
              <p>Q: Can I update the website myself?</p>
              <p>
                A: Absolutely. We build on platforms like WordPress and Webflow,
                allowing easy content updates.
              </p>
            </div>

            <div className="port_btn_container">
              <Link to="/portfolio" className="port_btn">
                Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- service card  --> */}
      <div className="webdesign_service_card_main ">
        {WebDesignData.map((item, index) => (
          <div key={index} className="webdesgin_card_parents">
            <div className="each_web_card_parents">
              <div
                className="web_img_container"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <img src={item.img} alt="" />
                {hoverIndex === index &&(
                <div
                  className={`webdesign_hover_card show-card
                    }`}
                >
                  <div className="webdesign_hover_btn_parents">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="webdesign_hover_btn"
                    >
                    Live 
                    <span className="weblive"><IoEyeSharp /></span>
                    </a>
                  </div>
                </div>
                )}
              </div>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default WebDesign;
