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
import christmas from '../../resources/img/coffee_list/Christmas.jpg';

const Christmas = ({match}) => {
    const username = useLocation();
    console.log(username);
    return (
        <>
            <ScrollToTop/>
            {/* <SHeader/> */}

            <div className="sub_header">
                <div className="coffee_name flex flex_jc_c flex_dir_c flex_ai_c">
                    <HistoryBack/>
                    <span className="k_name">크리스마스</span>
                    <span className="e_name">Christmas</span>  
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
                                <span>Christmas</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

                <section className="sub_section">
                    <div className="cont_1 flex flex_jc_sb">
                        <div className="img_box">
                            <img src={christmas} alt=""></img>
                        </div>
                        <div className="coffee_info">
                            <div className="coffee_origin">
                                <span className="bullet">원산지 : </span>
                                <span>아시아/태평양(인도네시아) &amp; 라틴 아메리카(코스타리카)</span>
                            </div>
                            <ul className="info_box">
                                <li className="tasting_note">
                                    <div className="sub_tit">Tasting Notes</div>
                                    <div>따뜻하고 포근한 삼나무향, 설탕에 졸인 생강과 버터스카치의 달콤함</div>
                                </li>
                                <li className="enjoy_with">
                                    <div className="sub_tit">Enjoy with</div>
                                    <div>버터스카치</div>
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
                                {ExtrantionList.type().props.children[1]}
                                {ExtrantionList.type().props.children[4]}
                            </ul>
                        </div>
                        <div className="txt_box">
                            <div className="sub_tit bullet">커피 스토리</div>
                            <ul>
                                <li>포근한 삼나무향과 다채로운 스파이스, 감칠맛이 매력적인 크리스마스 리저브 블렌드는 행복하고 즐거운 크리스마스의 느낌을 가득 담고 있습니다.</li>
                                <li> 크리스마스 시즌을 앞두고 신선한 커피 샘플이 도착하면, 우리는 크리스마스 블렌드에 어울리는 가장 완벽한 재료들을 찾아냅니다.</li>
                                <li>블렌딩은 매년 조금씩 달라지지만, 우리가 사랑하는 크리스마스의 강렬하고 생생한 풍미 프로필은 언제나 똑같습니다.</li>
                                <li> 올 해는 산미와 달콤함이 조화로운 코스타리카 하시엔다 알사시아, 강렬하고 묵직한 숙성 수마트라와 수마트라 아체가 블렌딩되어 풍부한 삼나무의 향, 다채로운 스파이스의 감칠맛, 버터스카치의 달콤함이 매력적인 크리스마스 커피가 완성되었습니다.</li>
                            </ul>
                        </div>
                    </div> 
                </section>
            <RFooter/>
        </>
    )
}

export default Christmas;