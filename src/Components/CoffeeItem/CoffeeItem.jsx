import { Link, useNavigate } from 'react-router-dom';

import small_logo from '../../Assets/Images/coffee_list_logo.svg';

import Panama from '../../Assets/Images/coffee_list/Panama Boquete.jpg';
import Aged from '../../Assets/Images/coffee_list/Aged Sumatra.jpg';
import Hawaii from '../../Assets/Images/coffee_list/Hawaii Ka’u.jpg';
import Christmas from '../../Assets/Images/coffee_list/Christmas.jpg';
import Bolivia from '../../Assets/Images/coffee_list/Bolivia Sol de la Manana.jpg';
import Zambia from '../../Assets/Images/coffee_list/Zambia Isanya Estate.jpg';
import Rwanda from '../../Assets/Images/coffee_list/Rwanda Sholi.jpg';
import Ecuador from '../../Assets/Images/coffee_list/Ecuador Loja.jpg';

const CoffeeCard = [
  {
    name: '파나마 보케테',
    img: Panama,
    url: 'panama-boquete'
  },
  {
    name: '에이지드 수마트라',
    img: Aged,
    url: 'aged-sumatra'
  },
  {
    name: '하와이 카우',
    img: Hawaii,
    url: 'hawaii-kau'
  },
  {
    name: '크리스마스',
    img: Christmas,
    url: 'christmas'
  },
  {
    name: '볼리비아 솔 데 라 마냐',
    img: Bolivia,
    url: 'bolivia-sol-de-la-manana'
  },
  {
    name: '잠비아 이사냐 에스테이',
    img: Zambia,
    url: 'zambia-isanya-estate'
  },
  {
    name: '르완다 쇼리',
    img: Rwanda,
    url: 'rwanda-sholi'
  },
  {
    name: '에콰도르 로하',
    img: Ecuador,
    url: 'ecuador-loja'
  },
]

const CoffeeItem = () => {
  const navigate = useNavigate();
  return(
    <ul className='flex flex_jc_sb flex_wrap_wrap'>
      {CoffeeCard.map((coffee) =>
        <li key={coffee.name} className='relative cursor_p' onClick={() =>navigate(`coffee-products/${coffee.url}`)}>
          <div className='effect_name absolute'>{coffee.name}</div>
          <div>
            <div className='img_box relative'>
              <img src={coffee.img} alt={coffee.name} />
              <div className="coffee_target absolute">
                <div className='logo'>
                  <img src={small_logo} alt="" />
                </div>
                <div className='coffee_name absolute'>{coffee.name}</div>
              </div>
            </div>
          </div>
        </li>
      )}
    </ul>
  )
}

export default CoffeeItem;