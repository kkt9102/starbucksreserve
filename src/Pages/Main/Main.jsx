import { useRecoilValue, useRecoilState } from 'recoil';

import { extractionState } from '../../State/modalState';

import ExtractionModal from '../../Components/ExtractionModal/ExtractionModal';
import Home from '../../Components/Main/Section1';
import WhatsReserve from '../../Components/Main/Section2';
import Extraction from '../../Components/Main/Section3';
import Coffee from '../../Components/Main/Section4';
import KakaoMap from '../../Components/Main/Section5';

const Main = () => {
  const [extraModal,setExtraModal] = useRecoilState(extractionState);

  const handleCloseModal = () => {
    setExtraModal(-1)
  };
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
      <WhatsReserve/>
      <Extraction/>
      <Coffee/>
      {/* <KakaoMap/> */}
    </>
  )
}

export default Main;