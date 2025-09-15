import React from 'react'
import './Service.css'
import {Link } from 'react-router-dom';


function Service() {
  return (
    <div className="service_main_container">
    <div className="service_container">
      <div className="service_gradient">
        <div className="service_logo_container">
          <div className="service_logo_main_container">
            <div className="service_loader"></div>
          </div>
          <p className="service_logo_header">Core Skills</p>
        </div>
        <div className="services_box_container">
          <div className="box_one service_box">
            <Link to="photomanupulation"><button className="service_btn">Photo Manipulation</button></Link>
          </div>
          <div className="box_five service_box">
            <Link to="productvisualization"><button className="service_btn">3D Product Visualization</button></Link>
          </div>
          <div className="box_six service_box">
            <Link to="animation"><button className="service_btn">3D Product Animation</button></Link>
          </div>
          <div className="box_six service_box">
            <Link to="webdesign"><button className="service_btn">Web Design</button></Link>
          </div>
          <div className="box_five service_box">
            <Link to="guidelines"><button className="service_btn">Brand Guidelines</button></Link>
          </div>
          <div className="box_seven service_b0ox ">
            <Link to="socialmedia"><button className="service_btn">Social Media</button></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Service