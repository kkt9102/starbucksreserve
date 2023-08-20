import {Suspense} from 'react';
import Router from './Router';

import Loading from './Components/Loading';

function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <Router/>
    </Suspense>
  );
}

export default App;
