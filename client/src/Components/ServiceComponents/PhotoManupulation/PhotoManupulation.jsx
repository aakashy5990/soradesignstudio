import style from "./PhotoManupulation.module.css";
import "./PhotoManupulation_parents.css";
import { useOutletContext } from "react-router-dom";
import { photoManupulationData } from "../../../assets/assets";
import { Link } from "react-router-dom";

function PhotoManupulation() {
  const { isOpen, setIsOpen, toggle } = useOutletContext();

  return (
    <>
      <div className={style.intro_section} id="home">
        <div className="intro_content">
          <div className="intro_content_main">
            <div className="intro_text_content">
              <p>Photo-manipulation</p>
              <p>Transforming</p>
              <p>Visions Into Reality.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="service_main_slider_container">
        <div className="text_service_main_slide">
          <div className="text_service_slide">
            <p>Perfection</p>
            <p>requires</p>
            <p>patience.</p>
          </div>
          <div className="text_service_slide">
            <p>Perfection</p>
            <p>requires</p>
            <p>patience.</p>
          </div>
          <div className="text_service_slide">
            <p>Perfection</p>
            <p>requires</p>
            <p>patience.</p>
          </div>
          <div className="text_service_slide">
            <p>Perfection</p>
            <p>requires</p>
            <p>patience.</p>
          </div>
          <div className="text_service_slide">
            <p>Perfection</p>
            <p>requires</p>
            <p>patience.</p>
          </div>
        </div>

        <div className="service_main_slide">
          <div className="service_slide">
            <p>Head shots</p>
            <p>Photo recovery</p>
            <p>Book cover</p>
            <p>Profile Picture</p>
            <p>Color grading</p>
          </div>
          <div className="service_slide">
            <p>Head shots</p>
            <p>Photo recovery</p>
            <p>Book cover</p>
            <p>Profile Picture</p>
            <p>Color grading</p>
          </div>
          <div className="service_slide">
            <p>Head shots</p>
            <p>Photo recovery</p>
            <p>Book cover</p>
            <p>Profile Picture</p>
            <p>Color grading</p>
          </div>
          <div className="service_slide">
            <p>Head shots</p>
            <p>Photo recovery</p>
            <p>Book cover</p>
            <p>Profile Picture</p>
            <p>Color grading</p>
          </div>
          <div className="service_slide">
            <p>Head shots</p>
            <p>Photo recovery</p>
            <p>Book cover</p>
            <p>Profile Picture</p>
            <p>Color grading</p>
          </div>
        </div>
        <div className="service_main_slide2">
          <div className="service_slide2">
            <p>Head shots</p>
            <p>Photo recovery</p>
            <p>Book cover</p>
            <p>Profile Picture</p>
            <p>Color grading</p>
          </div>
          <div className="service_slide2">
            <p>Head shots</p>
            <p>Photo recovery</p>
            <p>Book cover</p>
            <p>Profile Picture</p>
            <p>Color grading</p>
          </div>
          <div className="service_slide2">
            <p>Head shots</p>
            <p>Photo recovery</p>
            <p>Book cover</p>
            <p>Profile Picture</p>
            <p>Color grading</p>
          </div>
          <div className="service_slide2">
            <p>Head shots</p>
            <p>Photo recovery</p>
            <p>Book cover</p>
            <p>Profile Picture</p>
            <p>Color grading</p>
          </div>
          <div className="service_slide2">
            <p>Head shots</p>
            <p>Photo recovery</p>
            <p>Book cover</p>
            <p>Profile Picture</p>
            <p>Color grading</p>
          </div>
        </div>
      </div>

      <div className="collaps_container">
        <p className="coll-first">
          Expert Image Manipulation Services | Transform Your Images
        </p>
        <p className="coll-second">
          Professional Image Manipulation for Unparalleled Visuals
        </p>
        <p className="coll-third">
          Elevate your images with our professional image manipulation services.
          Expert retouching, editing, and enhancement for stunning visuals.
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
              Transform Your Images with Our Expertise
            </p>
            <p className="content-heading">
              our image manipulation services help you perfect your images. Our
              expert editors retouch, edit, and enhance visuals to captivate
              audiences.
            </p>

            <div className="content-block">
              <div className="content-block_container">
                <div className="content-block_heading">
                  <p className="content_list_heading">
                    Image Manipulation Services:
                  </p>
                </div>
                <div className="content_block_list">
                  <ul>
                    <li>
                      <span>1.Photo Retouching:</span> Flawless skin, removed
                      blemishes
                    </li>
                    <li>
                      <span>2.Object Removal:</span> Seamless removal of
                      unwanted objects
                    </li>
                    <li>
                      <span>3.Image Enhancement:</span> Vibrant colors, adjusted
                      brightness
                    </li>
                    <li>
                      <span>4.Image Restoration:</span> Damaged image repair,
                      scratch removal
                    </li>
                    <li>
                      <span>5.Composite Images:</span> Merged images for
                      stunning visuals
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
                      <span>1.E-commerce:</span> Product image editing for
                      online stores
                    </li>
                    <li>
                      <span>2.Advertising:</span> Attention-grabbing image
                      manipulation
                    </li>
                    <li>
                      <span>3.Fashion:</span> High-end fashion image retouching
                    </li>
                    <li>
                      <span>4.Real Estate:</span> Property image enhancement
                    </li>
                    <li>
                      <span>5.Portrait Photography:</span> Professional portrait
                      retouching
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
                      <span>1.Expertise:</span> Seasoned editors with industry
                      knowledge
                    </li>
                    <li>
                      <span>2.Quality:</span> High-end, visually stunning
                      results
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
                Get a quote for your image manipulation project today! Contact
                us at vikashy263@gmail.com or +91 7455925669 to discuss your
                vision.
              </p>
              <p>FAQs:</p>
              <p>Q: What file formats do you accept?</p>
              <p>A: PSD, JPEG, PNG, TIFF</p>
              <p>Q: How long does image manipulation take?</p>
              <p>A: Turnaround times vary depending on project complexity.</p>
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

      <div className="service_card_container">
        <div className="service_card_main">
          {photoManupulationData.map((item, index) => (
            <div key={index} className="service_card_main_container">
              <div className="service_card_box_one service_box_comm">
                <Link to={item.link}>
                  <img src={item.img}  className="blur-img" alt="" />
                </Link>
              </div>
              <p>{item.pera1}</p>
              <p>{item.pera2}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PhotoManupulation;
