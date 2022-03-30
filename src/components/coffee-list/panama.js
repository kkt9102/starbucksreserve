import React from "react";

import { Link, useLocation } from 'react-router-dom';
import {BsStarFill, BsStar} from 'react-icons/bs';
import { MdKeyboardArrowRight } from "react-icons/md";

import HistoryBack from "../include/sub_history_back";
import ScrollToTop from "../../utils/scrollTop";
import * as ExtrantionList from '../extraction';
// import SHeader from "./sub_header";
import RFooter from '../include/reserve_footer';



// img
import panama from '../../resources/img/coffee_list/Panama Boquete.jpg';

const Panama = ({match}) => {
    const username = useLocation();
    console.log(username);
    return (
        <>
            <ScrollToTop/>
            {/* <SHeader/> */}

            <div className="sub_header">
                <div className="coffee_name flex flex_jc_c flex_dir_c flex_ai_c">
                    <HistoryBack/>
                    <span className="k_name">파나마 보케테</span>
                    <span className="e_name">Panama Boquete</span>  
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
                                <span>Panama Boquete</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

                <section className="sub_section">
                    <div className="cont_1 flex flex_jc_sb">
                        <div className="img_box">
                            <img src={panama} alt=""></img>
                        </div>
                        <div className="coffee_info">
                            <div className="coffee_origin">
                                <span className="bullet">원산지 : </span>
                                <span>라틴 아메리카(파나마)</span>
                            </div>
                            <ul className="info_box">
                                <li className="tasting_note">
                                    <div className="sub_tit">Tasting Notes</div>
                                    <div>잘 익은 오렌지의 산미와 카카오닙스, 달콤한 피니시</div>
                                </li>
                                <li className="enjoy_with">
                                    <div className="sub_tit">Enjoy with</div>
                                    <div>오렌지, 카카오닙스</div>
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
                                {ExtrantionList.type().props.children[3]}
                                {ExtrantionList.type().props.children[4]}
                            </ul>
                        </div>
                        <div className="txt_box">
                            <div className="sub_tit bullet">커피 스토리</div>
                            <ul>
                                <li>파나마의 서쪽에 있는 보케테는 작은 마을이지만 전 세계에 파나마 커피를 알린 유명한 커피 원산지입니다. 3개의 화산으로 둘러싸인 이 지역은 미네랄이 풍부한 토양과 커피 재배에 적합한 고도와 기후를 갖추고 있습니다.</li>
                                <li>이 커피가 재배된 돈 페페 농장에서는 고품질의 커피뿐만 아니라, 환경을 보호하기 위한 노력도 게을리하지 않습니다. 에코 펄퍼로 벗겨낸 커피 과육은 비료로 재활용하고, 물을 절약하고 재사용하여 환경 오염을 최소화합니다.</li>
                                <li>파나마 보케테는 잘 익은 오렌지처럼 부드러운 산미로 시작해서 쌉쌀한 카카오닙스의 풍미로 이어지며, 견과류를 넣은 쿠키처럼 버터리한 고소함과 달콤함이 부드럽게 마지막을 장식합니다.    </li>
                            </ul>
                        </div>
                    </div> 
                </section>
            <RFooter/>
        </>
    )
}

export default Panama;