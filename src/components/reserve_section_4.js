import React from "react";
import reserve from "../resource/css/Reserve.module.css";
import CoffeeList from "./coffee_list";

import S_4_tit from "../resource/img/section_4_tit.png";

const ReserveSC4 = () => {
    return(
        <>
            <section id={reserve.section_4} className={`${reserve.section} re_sc_4`}>
                <div className={reserve.con}>
                    <div className={`${reserve.section_tit} flex flex_jc_c flex_wrap_wrap`}>
                        <img src={S_4_tit} alt="리저브 원두 RESERVE™ COFFEE"></img>
                        <div className={`${reserve.sub_tit} flex flex_jc_c`}>스타벅스 리저브™에서 느끼는 전세계의 특별한 커피</div>
                    </div>
                    <div className={reserve.cont_1}>
                        <ul className="flex flex_jc_sb">
                            <CoffeeList />
                            <CoffeeList />
                            <CoffeeList />
                            <CoffeeList />
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReserveSC4;