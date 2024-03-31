import section_tit from '../../../Assets/Images/section_4_tit.png';
import CoffeeItem from '../../CoffeeItem';

const Coffee = () => {
  return (
    <div className="section_view re_sc_3" id="focus_4">
      <div className="page_title">
        <div className="img_box">
          <img src={section_tit} alt="" />
        </div>
        <div className="sub_txt flex flex_jc_c">스타벅스 리저브™에서 느끼는 전세계의 특별한 커피</div>
      </div>
      <div className="coffee_list">
        <CoffeeItem />
      </div>
    </div>
  );
};

export default Coffee;
