// MODULE
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
// RECOIL STATE
import { hostNameState } from '../../State/commonState';
// IMAGE
import small_logo from '../../Assets/Images/coffee_list_logo.svg';
// JSON
import CoffeeInfo from '../../Data/CoffeeDetail.json';

const CoffeeItem = () => {
  const navigate = useNavigate();
  const isLocal = useRecoilValue(hostNameState)
  return(
    <ul className='flex flex_jc_sb flex_wrap_wrap'>
      {CoffeeInfo.coffee.map((coffee) => {
        const pathUrl = coffee.img.replace('../../','');
          return(
          <li key={coffee.en_name} className='relative cursor_p' onClick={() =>navigate(`coffee-products/${coffee.url}`)}>
            <div className='effect_name absolute'>{coffee.ko_name}</div>
            <div>
              <div className='img_box relative'>
                <img src={isLocal ? 
                  `/starbucksreserve/${pathUrl}` 
                  :
                  `${process.env.REACT_APP_IMAGE_URL}${pathUrl}`
                  } alt={coffee.ko_name} />
                <div className="coffee_target absolute">
                  <div className='logo'>
                    <img src={small_logo} alt="" />
                  </div>
                  <div className='coffee_name absolute'>{coffee.ko_name}</div>
                </div>
              </div>
            </div>
          </li>
        )}
      )}
    </ul>
  )
}

export default CoffeeItem;