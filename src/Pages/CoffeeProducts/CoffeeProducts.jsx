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
      <Footer/>
    </div>
  )
}

export default CoffeeProducts