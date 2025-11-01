import React from 'react'
import { BrandGuidelinesPortData } from '../../../assets/assets-portfolio';

function BrandGuidelinesPort({activeBox}) {

  return (
    <div id="Brand" className={`tab-content ${
      activeBox === "brandguidelinesport" ? "activeport" : ""
    }`}>
    <div className="poster_container">
        <div className="poster_section">
            <p className="poster_heading">Not Just Logos. Complete Brand Languages.</p>
            <p className="poster_pera">Brand guidelines are the backbone of your visual identity, ensuring every
                element tells your story with clarity and consistency. From color palettes to typography, every
                detail matters in building a memorable brand.
                Ready to elevate your brand presence? Let’s define the rules that make your brand unmistakable!
            </p>
        </div>
    </div>
    <main>
      {BrandGuidelinesPortData.map((item,index) => (
        <img key={index} src={item} loading="lazy" />
      ))}
    </main>
</div>
  )
}

export default BrandGuidelinesPort