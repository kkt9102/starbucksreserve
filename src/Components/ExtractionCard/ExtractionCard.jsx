import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { extractionState } from '../../State/modalState';

import CoffeeData from '../../Data/CoffeeExtraction.json';

const ExtractionCard = () => {
  const [modal,setModal] = useRecoilState(extractionState)
  const handleModalPopupOpen = (index) => {
    setModal(index === modal ? -1 : index)
  };
  return(
    <ul className='flex flex_jc_sb'>
        {CoffeeData.ExtractionCard.map((card, index) =>
          <li key={card.name} className={`relative flex flex_jc_c cursor_p ${index === modal ? "active" : ""}`} onClick={()=> handleModalPopupOpen(index)}>
            <div className='card_top '>
              <div className='img_box'>
                <img src={card.img} alt="" />
              </div>
            </div>
            <div className='card_bottom'>
                <div className='card_tit '>{card.name}</div>
                <div className='card_bottom txt_box'>
                  <div className='sub_txt'>{card.txt}</div>
                </div>
              </div>
          </li>
        )
      }
    </ul>
  )
}

export default ExtractionCard;