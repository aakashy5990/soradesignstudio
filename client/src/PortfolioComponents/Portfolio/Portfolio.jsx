import React from 'react'
import MainPort from '../MainPort/MainPort'
import MainButtonPort from '../MainButtonPort/MainButtonPort'
import PostersPort from '../ContentPort/PostersPort/PostersPort'
import MotionPort from '../ContentPort/MotionPort/MotionPort'
import StillsPort from '../ContentPort/StillsPort/StillsPort'
import CGIPort from '../ContentPort/CGIPort/CGIPort'
import BrandGuidelinesPort from '../ContentPort/BrandGuidelinesPort/BrandGuidelinesPort'
import BrochurePort from '../ContentPort/BrochurePort/BrochurePort'
import { useState } from 'react'

function Portfolio() {
  const [activeBox, setActiveBox] = useState('posterport');
  return (
    <>
      <MainPort></MainPort>
      <MainButtonPort activeBox={activeBox} setActiveBox={setActiveBox}></MainButtonPort>
      <PostersPort activeBox={activeBox}></PostersPort>
      <MotionPort activeBox={activeBox}></MotionPort>
      <StillsPort activeBox={activeBox}></StillsPort>
      <CGIPort activeBox={activeBox}></CGIPort>
      <BrandGuidelinesPort activeBox={activeBox}></BrandGuidelinesPort>
      <BrochurePort activeBox={activeBox}></BrochurePort>
      <></>
    </>
  )
}

export default Portfolio