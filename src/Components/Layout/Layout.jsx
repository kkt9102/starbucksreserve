import { Outlet, useLocation } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import Header from "../Header/Header"
import Footer from '../Footer/Footer';
import MobileFooter from '../MobileFooter/MoblieFooter';

const Layout = () => {
  const location = useLocation();

  const subPage = location.pathname.includes('/coffee-products');

  return(
    <>
      {subPage ?
        ''
        :
        <Header/>
      }
        <Outlet/>
        {/* {
          isMobile ? 
            <MobileFooter/>
            :
            <Footer/>
        } */}
        <Footer/>
    </>
  )
}

export default Layout