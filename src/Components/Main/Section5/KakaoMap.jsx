
import section_tit from '../../../Assets/Images/section_5_tit.png';
import Map from '../../Map/Map';

const KakaoMap = () => {

  return(
    <div className="section_view re_sc_4">
      <div className="page_title">
        <div className="img_box">
          <img src={section_tit} alt="" />
        </div>
        <Map/>
      </div>
    </div>
  )
}

export default KakaoMap;