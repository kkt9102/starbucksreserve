import './resources/css/common.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from './components';
import Panama from './components/coffee-list/panama';


function App() {
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/Panama" element={<Panama/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
