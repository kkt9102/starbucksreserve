import React from "react";

import '../../resources/css/style.css';

function RFooter() {

    // const PageWidth = document.documentElement.scrollWidth;
    
    return(
        <>
            <footer id="reserve_footer">
                <div className="con">
                    <nav className="footer_menu_1">
                        <ul className="flex flex_jc_sb">
                            <li className="flex flex_ai_c">
                                <a href="#!" onClick={e => e.preventDefault()} title="개인정보처리방침 바로가기">개인정보처리방침</a>
                            </li>
                            <li className="flex flex_ai_c">
                                <a href="#!" onClick={e => e.preventDefault()} title="영상정보처리기기 운영관리 방침 바로가기">영상정보처리기기 운영관리 방침</a>
                            </li>
                            <li className="flex flex_ai_c">
                                <a href="#!" onClick={e => e.preventDefault()} title="홈페이지 이용약관 바로가기">홈페이지 이용약관</a>
                            </li>
                            <li className="flex flex_ai_c">
                                <a href="#!" onClick={e => e.preventDefault()} title="위치정보 이용약관 바로가기">위치정보 이용약관</a>
                            </li>
                            <li className="flex flex_ai_c">
                                <a href="#!" onClick={e => e.preventDefault()} title="스타벅스 카드 이용약관 바로가기">스타벅스 카드 이용약관</a>
                            </li>
                            <li className="flex flex_ai_c">
                                <a href="#!" onClick={e => e.preventDefault()} title="My DT Pass 서비스 이용약관 바로가기">My DT Pass 서비스 이용약관</a>
                            </li>
                            <li className="flex flex_ai_c">
                                <a href="#!" onClick={e => e.preventDefault()} title="비회원 이용약관 바로가기">비회원 이용약관</a>
                            </li>
                            <li className="flex flex_ai_c">
                                <a href="#!" onClick={e => e.preventDefault()} title="윤리경영 핫라인 바로가기">윤리경영 핫라인</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className="footer_menu_2">
                        <ul className="flex flex_jc_sa">
                            <li>
                                <a href="#!" onClick={e => e.preventDefault()} title="찾아오시는 길 바로가기">찾아오시는 길</a>
                            </li>
                            <li>
                                <a href="#!" onClick={e => e.preventDefault()} title="신규입점제의 바로가기">신규입점제의</a>
                            </li>
                            <li>
                                <a href="#!" onClick={e => e.preventDefault()} title="사이트맵 바로가기">사이트맵</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="address flex">
                        <div className="comp_num">사업자등록번호 : 201-81-21515</div>
                        <div className="comp_comp">주식회사 에스씨케이컴퍼니</div>
                        <div className="comp_ceo"> 대표이사 : 송 데이비드 호섭</div>
                        <div className="comp_tel">TEL : 1522-3232</div>
                        <div className="prvt_responsive">개인정보 책임자 : 하익성</div>
                    </div>
                    <div className="copyright flex flex_jc_c">ⓒ 2022 Starbucks Coffee Company. All Rights Reserved.</div>
                </div>
            </footer>
        </>
    )
}

export default RFooter;