import React from "react";

import reserve from "../resource/css/Reserve.module.css";

import S_2_tit from "../resource/img/section_2_tit.png";

const ReserveSC2 = () => {
    return(
        <>
            <section id={reserve.section_2} className={`${reserve.section} re_sc_2`}>
                <div className={reserve.con}>
                    <div className={`${reserve.section_tit} flex flex_jc_c`}>
                        <img src={S_2_tit} alt="스타벅스 리저브 starbucks reserve"></img>
                    </div>
                    <div className={`${reserve.cont_1}`}>
                        <div className={`${reserve.sub_txt} flex flex_jc_c`}>가장 진귀하고 이국적이며 정교한 풍미의 커피</div>
                        <div className={`${reserve.sub_tit} flex flex_jc_c`}>스타벅스 리저브™커피는 아주 진귀하고 특별한 커피입니다.</div>
                    </div>
                    <div className={reserve.cont_2}>
                        <ul className="flex flex_jc_c flex_wrap_wrap">
                            <li className="flex flex_jc_c">적은 수량 때문에 모든 분들에게 선보일 수 없으나, 독특한 맛과 향은 리저브 커피를 더욱 소중하게 만듭니다.</li>
                            <li className="flex flex_jc_c">가장 신선한 상태에서 손으로 골라낸 커피는 이 세상에서 가장 훌륭한 최상의 커피이자, 스타벅스에서 제공하는 특별한 경험입니다.</li>
                            <li className="flex flex_jc_c">남부 탄자니아의 고지대부터 자메이카의 블루 마운틴까지, 여러분을 새로운 커피 여정으로 초대합니다.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReserveSC2;