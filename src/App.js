// MODULE
import { useEffect, Suspense } from 'react';
import Router from './Router';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
// RECOIL STATE
import { hostNameState } from './State/commonState';
// COMPONENT
import Loading from './Components/Loading';

function App() {
  const location = useLocation();
  const [isLocal, setIsLocal] = useRecoilState(hostNameState)
  useEffect(() => {
    setIsLocal(window.location.hostname === 'localhost')
  },[isLocal]);
  return (
    <Suspense fallback={<Loading/>}>
      <Router/>
    </Suspense>
  );
}

export default App;
