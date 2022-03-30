import './resources/css/common.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useScroll } from './utils/scrollMove';
import Loading from './components/include/loading';
import Index from './components';
import Panama from './components/coffee-list/panama';
import Aged from './components/coffee-list/aged';
import Hawail from './components/coffee-list/hawail';
import Christmas from './components/coffee-list/christmas';
import Bolivia from './components/coffee-list/bolivia';
import Zambia from './components/coffee-list/zambia';
import Rwanda from './components/coffee-list/rwanda';
import Ecuador from './components/coffee-list/ecuador';

const App = () => {
  // const element = useRoutes([
  //   // These are the same as the props you provide to <Route>
  //   { path: '/', element: <Home /> },
  //   { path: 'dashboard', element: <Dashboard /> },
  //   { path: 'invoices',
  //     element: <Invoices />,
  //     // Nested routes use a children property, which is also
  //     // the same as <Route>
  //     children: [
  //       { path: ':id', element: <Invoice /> },
  //       { path: 'sent', element: <SentInvoices /> }
  //     ]
  //   },
  //   // Not found routes work as you'd expect
  //   { path: '*', element: <NotFound /> }
  // ]);

  // 스크롤 상단이동
  const setScrollTop = () => {
    window.scrollTo(0,0);
  }

  const {scrollY} = useScroll();
  const PageWidth = document.documentElement.scrollWidth;
  const PageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPer = (scrollY/PageHeight) * 100;

  return (
    <>
    <Loading/>
    <BrowserRouter basename="/starbucksreserve">
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/Panama" element={<Panama/>}/>
        <Route path="/Aged" element={<Aged/>}/>
        <Route path="/hawail" element={<Hawail/>}/>
        <Route path="/christmas" element={<Christmas/>}/>
        <Route path="/Bolivia" element={<Bolivia/>}/>
        <Route path="/Zambia" element={<Zambia/>}/>
        <Route path="/rwanda" element={<Rwanda/>}/>
        <Route path="/Ecuador" element={<Ecuador/>}/>
      </Routes>
    </BrowserRouter>
    {PageWidth > 768 ?  
      <div id="scroll_top" className={`${scrollPer < 40 ? 'hide' : 'show'} ${scrollPer < 80 ? '' : 'btms'} fixed`} href="#!" onClick={setScrollTop} tabIndex="0">TOP</div> : 
      <div id="scroll_top" className={`${scrollPer < 40 ? 'hide' : 'show'} ${scrollPer < 80 ? '' : 'btms'} fixed scrollTop_mo`} href="#!" onClick={setScrollTop} tabIndex="0">TOP</div>
    }
    
    </>
  );
}

export default App;
