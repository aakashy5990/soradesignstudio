import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import CustomCursor from "../Components/CustomCursor/CustomCursor";
import WhatsApp from "../Components/WhatsApp/WhatsApp";
import ParticleBackground from "../Components/Particle/ParticleBackground";

// Import all your components
import Home from "./Home.jsx";
import PhotoManupulation from "../Components/ServiceComponents/PhotoManupulation/PhotoManupulation.jsx";
import ServiceLayout from "../layouts/ServiceLayout.jsx";
import ProductVisualization from "../Components/ServiceComponents/ProductVisualization/ProductVisualization.jsx";
import WebDesign from "../Components/ServiceComponents/WebDesign/WebDesign.jsx";
import Guidelines from "../Components/ServiceComponents/Guidelines/Guidelines.jsx";
import Animation from "../Components/ServiceComponents/Animation/Animation.jsx";
import SocialMedia from "../Components/ServiceComponents/SocialMedia/SocialMedia.jsx";

// photomanupulation child
import Valkyrie from "../Components/ServiceComponents/PhotoManupulation/Valkyrie/Valkyrie.jsx";
import Cybersoul from "../Components/ServiceComponents/PhotoManupulation/Cybersoul/Cybersoul.jsx";
import Shadows from "../Components/ServiceComponents/PhotoManupulation/Shadows/Shadows.jsx";
import LastEcho from "../Components/ServiceComponents/PhotoManupulation/LastEcho/LastEcho.jsx";
import OceanWhisper from "../Components/ServiceComponents/PhotoManupulation/OceanWhisper/OceanWhisper.jsx";
import WinterGuardians from "../Components/ServiceComponents/PhotoManupulation/WinterGuardians/WinterGuardians.jsx";

// productvisualization child
import Boat from "../Components/ServiceComponents/ProductVisualization/Boat/Boat.jsx";
import NikkaWhisky from "../Components/ServiceComponents/ProductVisualization/NikkaWhisky/NikkaWhisky.jsx";
import Perfume from "../Components/ServiceComponents/ProductVisualization/Perfume/Perfume.jsx";
import WhiskyModel from "../Components/ServiceComponents/ProductVisualization/WhiskyModel/WhiskyModel.jsx";
import Omnitrix from "../Components/ServiceComponents/ProductVisualization/Omnitrix/Omnitrix.jsx";
import Window from "../Components/ServiceComponents/ProductVisualization/Window/Window.jsx";
import Jewelry from "../Components/ServiceComponents/ProductVisualization/Jewelry/Jewelry.jsx";
import AppleWatch from "../Components/ServiceComponents/ProductVisualization/AppleWatch/AppleWatch.jsx";
import UVLC from "../Components/ServiceComponents/ProductVisualization/UVLC/UVLC.jsx";

// brandguidlines child
import AlaknandaGuidelines from "../Components/ServiceComponents/Guidelines/AlaknandaGuidelines/AlaknandaGuidelines.jsx";
import CreatorzVisionGuidelines from "../Components/ServiceComponents/Guidelines/CreatorzVisionGuidelines/CreatorzVisionGuidelines.jsx";
import GreenDotGuidelines from "../Components/ServiceComponents/Guidelines/GreenDotGuidelines/GreenDotGuidelines.jsx";
import PaceGuidelines from "../Components/ServiceComponents/Guidelines/PaceGuidelines/PaceGuidelines.jsx";
import RisingDiamondGuidelines from "../Components/ServiceComponents/Guidelines/RisingDiamondGuidelines/RisingDiamondGuidelines.jsx";
import RisingGemGuidelines from "../Components/ServiceComponents/Guidelines/RisingGemGuidelines/RisingGemGuidelines.jsx";
import ThunderGuidelines from "../Components/ServiceComponents/Guidelines/ThunderGuidelines/ThunderGuidelines.jsx";
import WindowSpaceGuidelines from "../Components/ServiceComponents/Guidelines/WindowSpaceGuidelines/WindowSpaceGuidelines.jsx";

// socailmedia child
import Autism from "../Components/ServiceComponents/SocialMedia/Autism/Autism.jsx";
import Bees from "../Components/ServiceComponents/SocialMedia/Bees/Bees.jsx";
import Cgi from "../Components/ServiceComponents/SocialMedia/Cgi/Cgi.jsx";
import Creative from "../Components/ServiceComponents/SocialMedia/Creative/Creative.jsx";
import Informative from "../Components/ServiceComponents/SocialMedia/Informative/Informative.jsx";
import SpecialDay from "../Components/ServiceComponents/SocialMedia/SpecialDay/SpecialDay.jsx";

// import portfolio layout
import PortfolioLayout from "../layouts/PortfolioLayout.jsx";
import Portfolio from "../PortfolioComponents/Portfolio/Portfolio.jsx";

// import admin here 
import Admin from './Admin/Admin.jsx';
import Login from '../Components/admin/Login.jsx';
import DashBoard from './Admin/DashBoard.jsx';
import { useAppContext } from "../context/AppContext.jsx";
import AddLogo from "./Admin/AddLogo.jsx";
import Client from "./Admin/Client.jsx";

function App() {
  const location = useLocation();
  const { token } = useAppContext();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  // Debug: identify any undefined components causing invalid element type
  console.log({
    Navbar, CustomCursor, WhatsApp, ParticleBackground,
    Home, ServiceLayout, PhotoManupulation, ProductVisualization, WebDesign, Guidelines, Animation, SocialMedia,
    Valkyrie, Cybersoul, Shadows, LastEcho, OceanWhisper, WinterGuardians,
    Boat, NikkaWhisky, Perfume, WhiskyModel, Omnitrix, Window, Jewelry, AppleWatch, UVLC,
    AlaknandaGuidelines, CreatorzVisionGuidelines, GreenDotGuidelines, PaceGuidelines, RisingDiamondGuidelines, RisingGemGuidelines, ThunderGuidelines, WindowSpaceGuidelines,
    PortfolioLayout, Portfolio,
    Admin, Login, DashBoard, AddLogo, Client
  });


  return (
    <>
      <CustomCursor></CustomCursor>
      {/* Toaster is already rendered inside AppProvider */}
      {/* <ParticleBackground></ParticleBackground> */}
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/" element={token ? <Admin/> : <Login />} >
          <Route index element={<DashBoard />} />
          <Route path='addlogo' element={<AddLogo />} />
          <Route path='clients' element={<Client />} />
        </Route>
        
        {/* Home Route */}
        <Route path="/" element={<Home />} />
        
        {/* Portfolio Route */}
        <Route path="/portfolio" element={<PortfolioLayout />}>
          <Route index element={<Portfolio />} />
        </Route>
        
        {/* Service Routes */}
        <Route path="/" element={<ServiceLayout />}>
          {/* PhotoManipulation + Subpages */}
          <Route path="photomanupulation" element={<PhotoManupulation />} />
          <Route path="photomanupulation/valkyrie" element={<Valkyrie />} />
          <Route path="photomanupulation/cybersoul" element={<Cybersoul />} />
          <Route path="photomanupulation/shadows" element={<Shadows />} />
          <Route path="photomanupulation/lastecho" element={<LastEcho />} />
          <Route path="photomanupulation/oceanwhisper" element={<OceanWhisper />} />
          <Route path="photomanupulation/guardians" element={<WinterGuardians />} />

          {/* Product Visualization + Subpages */}
          <Route path="productvisualization" element={<ProductVisualization />} />
          <Route path="productvisualization/boat" element={<Boat />} />
          <Route path="productvisualization/nikkawhisky" element={<NikkaWhisky />} />
          <Route path="productvisualization/whiskymodel" element={<WhiskyModel />} />
          <Route path="productvisualization/perfume" element={<Perfume />} />
          <Route path="productvisualization/omnitrix" element={<Omnitrix />} />
          <Route path="productvisualization/window" element={<Window />} />
          <Route path="productvisualization/jewelry" element={<Jewelry />} />
          <Route path="productvisualization/applewatch" element={<AppleWatch />} />
          <Route path="productvisualization/upvclangle" element={<UVLC />} />
          
          {/* Web Design */}
          <Route path="WebDesign" element={<WebDesign />} />

          {/* Guidelines + Subpages */}
          <Route path="guidelines" element={<Guidelines />} />
          <Route path="guidelines/creatorzvision" element={<CreatorzVisionGuidelines />} />
          <Route path="guidelines/alaknanda" element={<AlaknandaGuidelines />} />
          <Route path="guidelines/greendot" element={<GreenDotGuidelines />} />
          <Route path="guidelines/paceguidelines" element={<PaceGuidelines />} />
          <Route path="guidelines/risingdiamond" element={<RisingDiamondGuidelines />} />
          <Route path="guidelines/risinggem" element={<RisingGemGuidelines />} />
          <Route path="guidelines/thunder" element={<ThunderGuidelines />} />
          <Route path="guidelines/windowspace" element={<WindowSpaceGuidelines />} />

          {/* Animation */}
          <Route path="animation" element={<Animation />} />

          {/* Social Media + Subpages */}
          <Route path="socialmedia" element={<SocialMedia />} />
          <Route path="socialmedia/autism" element={<Autism />} />
          <Route path="socialmedia/bees" element={<Bees />} />
          <Route path="socialmedia/cgi" element={<Cgi />} />
          <Route path="socialmedia/creative" element={<Creative />} />
          <Route path="socialmedia/informative" element={<Informative />} />
          <Route path="socialmedia/specialday" element={<SpecialDay />} />
        </Route>
      </Routes>
      {/* <WhatsApp></WhatsApp> */}
    </>
  );
}

export default App;
