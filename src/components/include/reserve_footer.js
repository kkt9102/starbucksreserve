import React from "react";

import '../../resources/css/style.css';

function RFooter() {
    return(
        <>
            <footer id="reserve_footer">
                <div className="con">
                    <nav className="footer_menu_1">
                        <ul className="flex flex_jc_sb">
                            <li className="flex flex_ai_c">개인정보처리방침</li>
                            <li className="flex flex_ai_c">영상정보처리기기 운영관리 방침</li>
                            <li className="flex flex_ai_c">홈페이지 이용약관</li>
                            <li className="flex flex_ai_c">위치정보 이용약관</li>
                            <li className="flex flex_ai_c">스타벅스 카드 이용약관</li>
                            <li className="flex flex_ai_c">My DT Pass 서비스 이용약관</li>
                            <li className="flex flex_ai_c">비회원 이용약관</li>
                            <li className="flex flex_ai_c">윤리경영 핫라인</li>
                        </ul>
                    </nav>
                    <nav className="footer_menu_2">
                        <ul className="flex flex_jc_sa">
                            <li>찾아오시는 길</li>
                            <li>신규입점제의</li>
                            <li>사이트맵</li>
                        </ul>
                    </nav>
                    <div className="address flex">
                        <div className="comp_num">사업자등록번호 : 201-81-21515</div>
                        <div className="comp_ceo">주식회사 에스씨케이컴퍼니 대표이사 : 송 데이비드 호섭</div>
                        <div className="comp_tel">TEL : 1522-3232</div>
                        <div className="prvt_responsive">개인정보 책임자 : 하익성</div>
                    </div>
                    <div className="copyright flex flex_jc_c`">ⓒ 2022 Starbucks Coffee Company. All Rights Reserved.</div>
                </div>
            </footer>
        </>
    )
}

export default RFooter;