import React from "react";
import Map from "../../../../utils/kakaoMap";
import reserve from "../resource/css/Reserve.module.css";


import S_5_tit from "../resource/img/section_5_tit.png";

const ReserveSC5 = () => {

    return(
        <>
            <section id={reserve.section_5} className={`${reserve.section} re_sc_5`}>
                <div className={reserve.con}>
                    <div className={`${reserve.section_tit} flex flex_jc_c`}>
                        <img src={S_5_tit} alt="리저브 매장 RESERVE™ LOCATION"></img>
                    </div>
                    <div className={reserve.map_box}>
                        <Map/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReserveSC5;