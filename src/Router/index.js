import { lazy } from "react";
import { useRoutes } from "react-router-dom";

// LAYOUT
const Layout = lazy(() => import('../Components/Layout'));

const Router = () => useRoutes([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        
      }
    ]
  }
]);

export default Router;