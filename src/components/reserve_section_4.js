import React from "react";
import '../resources/css/style.css';
import CoffeeList from "./coffee-list/name";

import S_4_tit from "../resources/img/section_4_tit.png";

const ReserveSC4 = () => {
    return(
        <>
            <section id="section_4" className="section re_sc_4">
                <div className="con">
                    <div className="section_tit flex flex_jc_c flex_wrap_wrap">
                        <img src={S_4_tit} alt="리저브 원두 RESERVE™ COFFEE"></img>
                        <div className="sub_tit flex flex_jc_c">스타벅스 리저브™에서 느끼는 전세계의 특별한 커피</div>
                    </div>
                    <div className="cont_1">
                        <ul className="flex flex_jc_sb flex_wrap_wrap">
                            <CoffeeList/>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReserveSC4;