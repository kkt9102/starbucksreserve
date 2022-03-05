import React from "react";

import { Link, useLocation } from 'react-router-dom';
import {BsStarFill, BsStar} from 'react-icons/bs';
import { MdKeyboardArrowRight } from "react-icons/md";

import ScrollToTop from "../../utils/scrollTop";
import * as ExtrantionList from '../extraction';
// import SHeader from "./sub_header";
import RFooter from '../include/reserve_footer';



// img
import hawail from '../../resources/img/coffee_list/Hawaii Ka’u.jpg';

const Hawail = ({match}) => {
    const username = useLocation();
    console.log(username);
    return (
        <>
            <ScrollToTop/>
            {/* <SHeader/> */}

            <div className="sub_header">
                <div className="coffee_name flex flex_jc_c flex_dir_c flex_ai_c">
                    <span className="k_name">하와이 카우</span>
                    <span className="e_name">Hawaii Ka’u</span>  
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
                                <span>Hawaii Ka’u</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

                <section className="sub_section">
                    <div className="cont_1 flex flex_jc_sb">
                        <div className="img_box">
                            <img src={hawail} alt=""></img>
                        </div>
                        <div className="coffee_info">
                            <div className="coffee_origin">
                                <span className="bullet">원산지 : </span>
                                <span>아시아/태평양</span>
                            </div>
                            <ul className="info_box">
                                <li className="tasting_note">
                                    <div className="sub_tit">Tasting Notes</div>
                                    <div>아몬드의 고소함과 크리미하고 부드러운 누가의 달콤함</div>
                                </li>
                                <li className="enjoy_with">
                                    <div className="sub_tit">Enjoy with</div>
                                    <div>아몬드, 누가</div>
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
                                <li>카우는 하와이 빅아일랜드의 최남단에 위치한 지역입니다. 하와이의 수확 시기는 일반적으로 낮은 고도에서 8월에 시작해 높은 고도에서 6월에 끝납니다.</li>
                                <li>기후 변화로 인해 카우의 수확이 예년보다 빨라졌습니다. 카우 커피는 빅아일랜드의 서쪽 지역에서 재배되고 오랫동안 많은 사랑을 받아 온 코나 커피의 그늘에 가려져 있었습니다.</li>
                                <li>카우 지역의 커피는 1894년부터 재배되기 시작했지만 사탕수수 농장이었던 땅을 커피 농장으로 전환하는 데 어려움을 겪었습니다. </li>
                                <li>90년대 후반 사탕수 산업이 붕괴된 후 커피 재배에 재투자하기 시작한 농가가 점점 더 늘어나기 시작했습니다. 코나와 카우는 가까운 거리에 위치해 있지만 커피 재배 방식은 완전히 다릅니다.</li>
                                <li>코나 커피는 첨단 인프라를 갖춘 대규모 농장에서 생산하지만, 카우 커피는 소규모 자영농이 재배합니다.</li>
                            </ul>
                        </div>
                    </div> 
                </section>
            <RFooter/>
        </>
    )
}

export default Hawail;