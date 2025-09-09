import "./MotionPort.css";

import useYoutube from "../../../hooks/useYoutube";
import Loader from "../Loader/Loader";

function MotionPort({ activeBox }) {
  const { ytvideos, loading, playingVideoId, setPlayingVideoId } = useYoutube();

  return (
    <div
      id="motion"
      className={`tab-content ${
        activeBox === "motionport" ? "activeport" : ""
      }`}
    >
      <div className="poster_container">
        <div className="poster_section">
          <p className="poster_heading">
            Watch the Difference Motion Makes.
          </p>
          <p className="poster_pera">
            Dive into a world where creativity meets technology through
            eye-catching motion designs, seamless video editing, and captivating
            3D animations. Each project is crafted to tell a story, evoke
            emotions, and leave a lasting impression. Whether it's dynamic
            visuals, engaging transitions, or intricate 3D modeling, the focus
            is always on delivering content that captivates and communicates
            effectively. Discover how innovative visuals can transform any
            concept into a compelling experience that stands out in the digital
            landscape.
          </p>
        </div>
      </div>

      {/* Youtube data fatch section  */}

      <div className="ytsection_components">
        {loading ? (
          <Loader />
        ) : (
          ytvideos.map((video) => {
            const videoId = video.id;
            return (
              <div key={videoId} className="ytbox">
                {playingVideoId === videoId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title={video.title}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <div
                    className="ytimg"
                    onClick={() => setPlayingVideoId(videoId)}
                  >
                    <img src={video.thumbnail} alt={video.title} />
                  </div>
                )}
                <div className="yttitle">
                  <p>{video.title}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default MotionPort;
