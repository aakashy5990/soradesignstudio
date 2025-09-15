import "./NewsSection.css";

function NewsSection() {
  return (
    <div className="get_intro_section" id="home">
      <video className="get_hero_video" autoPlay muted loop playsInline>
        <source src="/Grandfoldupvc.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="get_hero_intro_content">
        <div className="get_hero_intro_text_content">
          <p>ASCENDIA</p>
          <p>
            <a
              href="https://www.behance.net/gallery/227668081/uPVC-Slide-Fold-Ascendia-"
              target="_blank"
              className="get_lets_btn"
            >
              CASE STUDY
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
