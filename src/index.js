import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Assets/Styles/_index.css';

import { BrowserRouter, HashRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      {/* <HashRouter basename={process.env.PUBLIC_URL}> */}
      <HashRouter>
        <App />
      </HashRouter>
    </RecoilRoot>
  </React.StrictMode>
);

reportWebVitals();
