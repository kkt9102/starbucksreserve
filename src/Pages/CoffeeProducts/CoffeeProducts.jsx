import { useLocation, useParams } from 'react-router-dom';

import SubHeader from '../../Components/SubHeader';
import Footer from '../../Components/Footer';

import CoffeeInfo from '../../Data/CoffeeDetail.json';

import { ReactComponent as StarScore } from '../../Assets/Images/Star_icon.svg';

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
          <div className='coffee_origin deco_txt flex'>
            <span className='key_title'>원산지&nbsp;:</span>
            <span className='origin_location'>&nbsp;{coffeeInfo[0].origin}</span>
          </div>
          <div className='coffee_info_chart'>
            <div className='tasting flex flex_dir_c'>
              <div className='key'>Tasting Notes</div>
              <div className='value'>{coffeeInfo[0].tasting_notes}</div>
            </div>
            <div className='enjoy flex flex_dir_c'>
              <div className='key'>Enjoy With</div>
              <div className='value'>{coffeeInfo[0].enjoy_with}</div>
            </div>
            <div className='methods flex flex_dir_c'>
              <div className='key'>Processing Method</div>
              <div className='value'>{coffeeInfo[0].processing_method}</div>
            </div>
            <div className='body_score flex flex_dir_c'>
              <div className='key'>Body</div>
              <div className='value'><StarScore/></div>
            </div>
            <div className='acidity_score flex flex_dir_c'>
              <div className='key'>Acidity</div>
              <div className='value'><StarScore/></div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default CoffeeProducts