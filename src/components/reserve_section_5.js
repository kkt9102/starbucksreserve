import React from "react";
import KaKaoMap from "../utils/kakaoMap";
import '../resources/css/style.css';


import S_5_tit from "../resources/img/section_5_tit.png";

const ReserveSC5 = () => {

    return(
        <>
            <section id="section_5" className="section re_sc_5">
                <div className="con">
                    <div className="section_tit flex flex_jc_c flex_wrap_wrap">
                        <img src={S_5_tit} alt="리저브 매장 RESERVE™ LOCATION"></img>
                        <div className="sub_tit flex flex_jc_c">전국의 스타벅스 리저브™ 매장 <span className="mark_count"></span> 곳을 확인하세요</div>
                    </div>
                    <div className="map_box">
                        {/* <KaKaoMap/> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReserveSC5;