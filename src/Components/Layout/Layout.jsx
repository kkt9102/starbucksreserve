import { Outlet, useLocation } from 'react-router-dom';

import Header from "../Header/Header"
import Footer from '../Footer/Footer';

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
      <Footer/>
    </>
  )
}

export default Layout