import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import ServiceFooter from "../Components/ServiceComponents/Footer/ServiceFooter";
import { useState } from "react";
import CustomCursor from "../Components/CustomCursor/CustomCursor";
import WhatsApp from "../Components/WhatsApp/WhatsApp";


const ServiceLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const contextValue = { isOpen, setIsOpen, toggle };


  return (
    <>
      <Navbar></Navbar>
      <CustomCursor></CustomCursor>
      <WhatsApp></WhatsApp>
      <Outlet context={contextValue}/>
      <ServiceFooter></ServiceFooter>
    </>
  );
};

export default ServiceLayout;
