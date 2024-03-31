import mainLogo from '../../../Assets/Images/main_logo.png';

const Home = () => {
  return (
    <div className="section_view re_sc_0 relative" id="focus_1">
      <div className="main_logo relative">
        <div className="img_box">
          <img src={mainLogo} alt="" loading="lazy" width="300" height="370" />
        </div>
      </div>
      <div className="txt_box relative flex flex_dir_c flex_jc_c flex_ai_c">
        <div className="sub_txt">스타벅스 리저브™ 매장에서 프리미엄 커피를 만나다</div>
        <div className="main_txt">차별화된 최상의 스타벅스 경험을 제공합니다.</div>
      </div>
    </div>
  );
};

export default Home;
