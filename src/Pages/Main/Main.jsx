import { useRecoilValue, useRecoilState } from 'recoil';
import { useInView } from 'react-intersection-observer';

import { extractionState } from '../../State/modalState';
import { scrollState } from '../../State/scrollState';

import ExtractionModal from '../../Components/ExtractionModal/ExtractionModal';
import Home from '../../Components/Main/Section1';
import WhatsReserve from '../../Components/Main/Section2';
import Extraction from '../../Components/Main/Section3';
import Coffee from '../../Components/Main/Section4';
import KakaoMap from '../../Components/Main/Section5';
import { useEffect } from 'react';

const Main = () => {
  const [ref, inView] = useInView();

  const [extraModal,setExtraModal] = useRecoilState(extractionState);
  const [scroll,setScroll] = useRecoilState(scrollState)

  const handleCloseModal = () => {
    setExtraModal(-1)
  };

  useEffect(() => {
    if(inView) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  },[inView])
  console.log(scroll)
  return(
    <>
      {
        extraModal !== -1 ? 
        <>
          <div className='modal_bg'>
            <ExtractionModal index={extraModal} close={handleCloseModal}/>
          </div>
        </> 
        : 
        null
      }
      <Home/>
      <div ref={ref}></div>
      <WhatsReserve/>
      <Extraction/>
      <Coffee/>
      <KakaoMap/>
    </>
  )
}

export default Main;