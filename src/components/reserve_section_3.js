import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import '../resources/css/style.css';
import ExtrantionList from "./extraction";

import Modal from "./popup";

import S_3_tit from "../resources/img/section_3_tit.png";

const ReserveSC3 = (props) => {
    const [PopupOpen,setPopupOpen] = useState(false);

    const openPop = () => {
        setPopupOpen(true);
    }

    const closePop = () => {
        setPopupOpen(false);
    }
    
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