// MODULE
import { useRecoilState, useRecoilValue } from 'recoil';
// RECOIL STATE
import { extractionState } from '../../State/modalState';
import { hostNameState } from '../../State/commonState';
// JSON
import CoffeeData from '../../Data/CoffeeExtraction.json';

const ExtractionCard = ({detail}) => {
  const [modal,setModal] = useRecoilState(extractionState)
  const isLocal = useRecoilValue(hostNameState)
  const handleModalPopupOpen = (index) => {
    setModal(index === modal ? -1 : index)
  };

  const data = detail === undefined ? CoffeeData.ExtractionCard : detail
  return(
    <ul className='flex flex_jc_sb'>
      {data.map((card, index) => {
        const pathUrl = card.img.replace('../../','');
        return (
        <li key={card.name} className={`relative flex flex_jc_c cursor_p ${index === modal ? "active" : ""}`} onClick={()=> handleModalPopupOpen(index)}>
          <div className='card_top '>
            <div className='img_box'>
              <img src={isLocal ?
                `/starbucksreserve/${pathUrl}`
                :
                `${process.env.REACT_APP_IMAGE_URL}${pathUrl}`
                } alt="" />
            </div>
          </div>
          <div className='card_bottom'>
              <div className='card_tit '>{card.name}</div>
              <div className='card_bottom txt_box'>
                <div className='sub_txt'>{card.txt}</div>
              </div>
            </div>
        </li>
        )}
      )}
    </ul>
  )
}

export default ExtractionCard;