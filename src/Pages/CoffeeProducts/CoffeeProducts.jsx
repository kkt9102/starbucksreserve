import { useLocation, useParams } from 'react-router-dom';

import SubHeader from '../../Components/SubHeader';

import CoffeeInfo from '../../Data/CoffeeDetail.json';

const CoffeeProducts = () => {
  const { coffee } = useParams();

  const coffeeInfo = CoffeeInfo.coffee.filter((item) => item.url === coffee)
  console.log(coffeeInfo);

  return(
    <>
      <SubHeader ko_name={coffeeInfo[0].ko_name} en_name={coffeeInfo[0].en_name}/>
    </>
  )
}

export default CoffeeProducts