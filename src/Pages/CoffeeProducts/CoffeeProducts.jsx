import { useLocation, useParams } from 'react-router-dom';

import SubHeader from '../../Components/SubHeader';
import Footer from '../../Components/Footer';

import CoffeeInfo from '../../Data/CoffeeDetail.json';

const CoffeeProducts = () => {
  const { coffee } = useParams();

  const coffeeInfo = CoffeeInfo.coffee.filter((item) => item.url === coffee)
  console.log(coffeeInfo);

  return(
    <div className='coffee_product'>
      <SubHeader ko_name={coffeeInfo[0].ko_name} en_name={coffeeInfo[0].en_name}/>
      <div className='coffee_body flex flex_jc_sb'>
        <div className='img_box'>
          <img src={`${coffeeInfo[0].img}`} alt={coffeeInfo[0].ko_name}/>
        </div>
        <div className='coffee_info'>
          <div className='coffee_origin flex'>
            <span>원산지 : </span>
            <span>{coffeeInfo[0].origin}</span>
          </div>
          <div className='coffee_info_chart'>
            
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default CoffeeProducts