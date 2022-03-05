import React from "react";

import { Link, useLocation } from 'react-router-dom';
import {BsStarFill, BsStar} from 'react-icons/bs';
import { MdKeyboardArrowRight } from "react-icons/md";

import ScrollToTop from "../../utils/scrollTop";
import * as ExtrantionList from '../extraction';
// import SHeader from "./sub_header";
import RFooter from '../include/reserve_footer';



// img
import rwanda from '../../resources/img/coffee_list/Rwanda Sholi.jpg';

const Rwanda = ({match}) => {
    const username = useLocation();
    console.log(username);
    return (
        <>
            <ScrollToTop/>
            {/* <SHeader/> */}

            <div className="sub_header">
                <div className="coffee_name flex flex_jc_c flex_dir_c flex_ai_c">
                    <span className="k_name">르완다 쇼리</span>
                    <span className="e_name">Rwanda Sholi</span>  
                </div>
                <nav className="menu_nav">
                    <ul className="flex">
                        <li className="history_back">
                            <Link to="/">HOME</Link>
                        </li>
                            <MdKeyboardArrowRight/>
                        <li>COFFEE</li>
                            <MdKeyboardArrowRight/>
                        <li>
                            <Link to="">
                                <span>Rwanda Sholi</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

                <section className="sub_section">
                    <div className="cont_1 flex flex_jc_sb">
                        <div className="img_box">
                            <img src={rwanda} alt=""></img>
                        </div>
                        <div className="coffee_info">
                            <div className="coffee_origin">
                                <span className="bullet">원산지 : </span>
                                <span>아프리카(르완다)</span>
                            </div>
                            <ul className="info_box">
                                <li className="tasting_note">
                                    <div className="sub_tit">Tasting Notes</div>
                                    <div>산뜻한 감귤류, 다크 초콜릿 향, 벌집꿀의 달콤함</div>
                                </li>
                                <li className="enjoy_with">
                                    <div className="sub_tit">Enjoy with</div>
                                    <div>시트러스, 다크 초콜릿, 베리</div>
                                </li>
                                <li className="processing">
                                    <div className="sub_tit">Processing Method</div>
                                    <div>수세식 가공</div>
                                </li>
                                <li className="body">
                                    <div className="sub_tit">Body</div>
                                    <div className="flex flex_ai_c">
                                        <span className="levels">보통</span>
                                        <span className="stars"><BsStarFill/><BsStarFill/><BsStarFill/><BsStar/><BsStar/></span>
                                    </div>
                                </li>
                                <li className="acidity">
                                    <div className="sub_tit">Acidity</div>
                                    <div className="flex flex_ai_c">
                                        <span className="levels">보통</span>
                                        <span className="stars"><BsStarFill/><BsStarFill/><BsStarFill/><BsStar/><BsStar/></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="cont_2 flex flex_jc_sb">
                        <div className="extra_select">
                            <div className="sub_tit bullet">스타벅스가 추천드리는 추출방식</div>
                            <ul className="flex">
                                {ExtrantionList.type().props.children[0]}
                                {ExtrantionList.type().props.children[1]}
                            </ul>
                        </div>
                        <div className="txt_box">
                            <div className="sub_tit bullet">커피 스토리</div>
                            <ul>
                                <li>이 커피는 환경 친화적인 커피 재배 방법과 공동체에 초점을 맞춰 여성들이 설립하고 운영하는 여성 협동조합에서 재배, 가공된 커피입니다.</li>
                                <li>르완다 중부의 무항가 지역에 사는 여성 주민 30명이 지난 2008년에 설립한 Abateraninkunga(의미 : ’상호 부조’) Ba Sholi 협동조합은 “르완다 최고의 커피 생산자가 되어 조합원과 지역사회의 경제적, 사회적 발전을 힘차게 뒷받침하는 것”을 목표로 삼고 있습니다.</li>
                                <li>조합의 지속적인 성장을 꾀하기 위해 남성 조합원의 가입을 받기 시작하여 현재는 332명의 조합원으로 구성되어 있으며, 이 중 207명이 여성입니다. 이 조합은 2015년 공정무역 인증을 받았습니다.</li>
                                <li>조합원들은 공정무역의 이점을 발판 삼아 적극적으로 지역사회 발전 문제에 대처하는 한편 이 구역의 빈곤 퇴치에 앞장서 왔습니다.</li>
                                <li>2014년과 2015년에 르완다 COE(Cup of Excellence) 상도 수상한 바 있습니다.</li>
                            </ul>
                        </div>
                    </div> 
                </section>
            <RFooter/>
        </>
    )
}

export default Rwanda;