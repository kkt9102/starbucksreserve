import React from "react";
import Map from "../utils/kakaoMap";
import '../resources/css/style.css';


import S_5_tit from "../resources/img/section_5_tit.png";

const ReserveSC5 = () => {

    return(
        <>
            <section id="section_5" className="section re_sc_5">
                <div className="con">
                    <div className="section_tit flex flex_jc_c">
                        <img src={S_5_tit} alt="리저브 매장 RESERVE™ LOCATION"></img>
                    </div>
                    <div className="map_box">
                        <Map/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReserveSC5;