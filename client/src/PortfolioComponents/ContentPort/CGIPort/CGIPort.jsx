import React from "react";
import { CGIPortData } from "../../../assets/assets-portfolio";

function CGIPort({activeBox}) {

  return (
    <div id="cgi" className={`tab-content ${activeBox === 'cgiport' ? 'activeport' : ''}`}>
      <div className="poster_container">
        <div className="poster_section">
          <p className="poster_heading">
            When It’s Not Shot, It’s Rendered.
          </p>
          <p className="poster_pera">
            3D modeling is more than just creating shapes; it’s about bringing
            ideas to life! From stunning visualizations to intricate designs,
            each model tells a unique story in a three-dimensional world. Let
            your imagination soar as we transform concepts into breathtaking 3D
            realities. What will you create today?
          </p>
        </div>
      </div>
      <main>
        {CGIPortData.map((item,index) => (
          <img key={index} src={item} loading="lazy" />
        ))}
      </main>
    </div>
  );
}

export default CGIPort;
