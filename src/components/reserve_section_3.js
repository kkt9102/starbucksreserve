import React from "react";
import reserve from "../resource/css/Reserve.module.css";
import ExtrantionList from "./extraction";

import S_3_tit from "../resource/img/section_3_tit.png";

const ReserveSC3 = () => {
    return(
        <>
        <section id={reserve.section_3} className={`${reserve.section} re_sc_3`}>
            <div className={reserve.con}>
                <div className={`${reserve.section_tit} flex flex_jc_c`}>
                    <img src={S_3_tit} alt="리저브 추출방식 RESERVE™ EXTRACTION"></img>
                </div>
                <div className={reserve.cont_1}>
                    <ExtrantionList/>
                </div>
            </div>
        </section>
        </>
    )
}

export default ReserveSC3;