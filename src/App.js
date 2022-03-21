import './resources/css/common.css';
import { BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import Index from './components';
import CoffeeInfo from './components/coffee-list/coffee';
import Panama from './components/coffee-list/panama';
import Aged from './components/coffee-list/aged';
import Hawail from './components/coffee-list/hawail';
import Christmas from './components/coffee-list/christmas';
import Bolivia from './components/coffee-list/bolivia';
import Zambia from './components/coffee-list/zambia';
import Rwanda from './components/coffee-list/rwanda';
import Ecuador from './components/coffee-list/ecuador';


const App = ({item}) => {
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

  
  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Index/>}/>
        {/* <Route path="/CoffeeInfo" element={<CoffeeInfo/>}/> */}

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
    </>
  );
}

export default App;
