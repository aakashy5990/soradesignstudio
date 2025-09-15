import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavbarPort from '../PortfolioComponents/NavbarPort/NavbarPort'
import FooterPort from '../PortfolioComponents/FooterPort/FooterPort'
// import InstagramPort from '../PortfolioComponents/InstagramPort/InstagramPort'
// InstagramPort

function PortfolioLayout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);
  return (
    <>
      <NavbarPort/>
      <Outlet></Outlet>
      {/* <InstagramPort/> */}
      <FooterPort/>

    </>
  )
}

export default PortfolioLayout