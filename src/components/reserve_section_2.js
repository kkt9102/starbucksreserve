import React from "react";

import '../resources/css/style.css';

import S_2_tit from "../resources/img/section_2_tit.png";

const ReserveSC2 = () => {
    return(
        <>
            <section id="section_2" className="section re_sc_2">
                <div className="con">
                    <div className="section_tit flex flex_jc_c">
                        <img src={S_2_tit} alt="스타벅스 리저브 starbucks reserve"></img>
                    </div>
                    <div className="cont_1">
                        <div className="sub_txt flex flex_jc_c">가장 진귀하고 이국적이며 정교한 풍미의 커피</div>
                        <div className="sub_tit flex flex_jc_c">스타벅스 리저브™커피는 아주 진귀하고 특별한 커피입니다.</div>
                    </div>
                    <div className="cont_2">
                        <ul className="flex flex_jc_c flex_wrap_wrap">
                            <li className="flex flex_jc_c">적은 수량 때문에 모든 분들에게 선보일 수 없으나, 독특한 맛과 향은 리저브 커피를 더욱 소중하게 만듭니다.</li>
                            <li className="flex flex_jc_c">가장 신선한 상태에서 손으로 골라낸 커피는 이 세상에서 가장 훌륭한 최상의 커피이자, 스타벅스에서 제공하는 특별한 경험입니다.</li>
                            <li className="flex flex_jc_c">남부 탄자니아의 고지대부터 자메이카의 블루 마운틴까지, 여러분을 새로운 커피 여정으로 초대합니다.</li>
                        </ul>
                    </div>
                    <div className="cont_3">
                        <ul className="flex flex_jc_c flex_wrap_wrap">
                            <li className="flex flex_jc_c">스타벅스 커피팀은 고객에게  최고품질의 커피를 제공하기 위해 매년 25만잔의 커피를 테스트 합니다 </li>
                            <li className="flex flex_jc_c">스타벅스 커피 전문가들은 커피농가와 돈독한 인연을 이여오며, 세계 최고급 커피 원두중에서도 상위 3%를 찾기위해 세계 각지를 여행하고,</li>
                            <li className="flex flex_jc_c">그 여정 속에서 이국적이고 희귀하며 가치가 있는 매우 특별한 원두를 발견하고 있습니다. </li>
                            <li className="flex flex_jc_c">단일 원산지에서 극소량만 재배되어 한정된 기간에만 만나볼 수 있는 진귀한 고품질의 원두를 스타벅스 리저브™에서 만나보세요.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReserveSC2;