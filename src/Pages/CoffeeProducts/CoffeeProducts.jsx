import { useLocation, useParams } from 'react-router-dom';

import SubHeader from '../../Components/SubHeader';
import Footer from '../../Components/Footer';
import ExtractionCard from '../../Components/ExtractionCard/ExtractionCard';
import * as ExtrantionList from '../../Components/ExtractionCard/ExtractionCard';

import CoffeeInfo from '../../Data/CoffeeDetail.json';

import { ReactComponent as StarScore } from '../../Assets/Images/Star_icon.svg';


const CoffeeProducts = () => {
  const { coffee } = useParams();

  const coffeeInfo = CoffeeInfo.coffee.filter((item) => item.url === coffee)
  console.log(coffeeInfo[0].extraction);

  return(
    <div className='coffee_product'>
      <SubHeader ko_name={coffeeInfo[0].ko_name} en_name={coffeeInfo[0].en_name}/>
      <div className='coffee_body flex flex_jc_sb'>
        <div className='img_box'>
          <img src={`${coffeeInfo[0].img}`} alt={coffeeInfo[0].ko_name}/>
        </div>
        <div className='coffee_info'>
          <div className='coffee_origin deco_txt flex'>
            <span className='key_title'>원산지&ensp;:</span>
            <span className='origin_location'>{coffeeInfo[0].origin}</span>
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
              <div className='value'>
                {Array.from(Array(coffeeInfo[0].body), x => <StarScore />)}
                {Array.from(Array(5 - coffeeInfo[0].body), x => <StarScore className='none_fill' />)}
              </div>
            </div>
            <div className='acidity_score flex flex_dir_c'>
              <div className='key'>Acidity</div>
              <div className='value'>
                {Array.from(Array(coffeeInfo[0].acidity), x => <StarScore />)}
                {Array.from(Array(5 - coffeeInfo[0].acidity), x => <StarScore className='none_fill' />)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='line'></div>
      <div className='coffee_footer flex flex_jc_sb'>
        <div className='proposal_extra'>
          <p className='section_tit deco_txt flex'>추천드리는 추출방식</p>
          {/* <ExtractionCard /> */}
        </div>
        <div className='coffee_story'>
          <p className='section_tit deco_txt flex'>커피 스토리</p>
          <div className='contents'>{coffeeInfo[0].coffee_story}</div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default CoffeeProducts