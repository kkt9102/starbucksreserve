import React from "react";
import '../resources/css/style.css';
import ExtrantionList from "./extraction";

import S_3_tit from "../resources/img/section_3_tit.png";

const ReserveSC3 = () => {
    return(
        <>
        <section id="section_3" className="section re_sc_3">
            <div className="con">
                <div className="section_tit flex flex_jc_c">
                    <img src={S_3_tit} alt="리저브 추출방식 RESERVE™ EXTRACTION"></img>
                </div>
                <div className="cont_1">
                    <nav className="extraction_list extra_list">
                        <ul className="flex flex_jc_sb">
                            <ExtrantionList/>
                        </ul>
                    </nav>    
                </div>
            </div>
        </section>
        </>
    )
}

export default ReserveSC3;