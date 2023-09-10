import { lazy } from "react";
import { useRoutes } from "react-router-dom";

// LAYOUT
const Layout = lazy(() => import('../Components/Layout'));
// PAGE
const Main = lazy(() => import('../Pages/Main'));
const CoffeeProducts = lazy(() => import('../Pages/CoffeeProducts'));
const Error = lazy(() => import('../Pages/Error'));

const Router = () => useRoutes([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: '/',
        element: <Main/>
      },
      {
        path: 'coffee-products/:coffee',
        element: <CoffeeProducts/>
      }
    ]
  },
  {
    path: '*',
    element: <Error/>
  }
]);

export default Router;