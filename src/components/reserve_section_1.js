import React from "react";
import '../resources/css/style.css';
import Main_logo from "../resources/img/main_logo.png";



const ReserveSC1 = () => {
    return(
        <>
            <section id="section_1" className="section re_sc_1">
                <div className="con">
                    <div className="cont_1 flex flex_jc_c">
                        <img src={Main_logo} className="main_logo" alt="리저브 로고 RESERVE™ LOGO"></img>
                        <div className="sub_txt font_P flex flex_jc_c">스타벅스 리저브™ 매장에서 프리미엄 커피를 만나다</div>
                        <div className="sub_tit font_P flex flex_jc_c">차별화된 최상의 스타벅스 경험을 제공합니다.</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReserveSC1;