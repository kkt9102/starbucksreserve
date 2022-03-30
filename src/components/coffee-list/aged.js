import React from "react";

import { Link } from 'react-router-dom';
import {BsStarFill, BsStar} from 'react-icons/bs';
import { MdKeyboardArrowRight } from "react-icons/md";

import HistoryBack from "../include/sub_history_back";
import ScrollToTop from "../../utils/scrollTop";
import * as ExtrantionList from '../extraction';
// import SHeader from "./sub_header";
import RFooter from '../include/reserve_footer';



// img
import aged from '../../resources/img/coffee_list/Aged Sumatra.jpg';

const Aged = () => {

    
    return (
        <>
            <ScrollToTop/>
            {/* <SHeader/> */}

            <div className="sub_header">
                <div className="coffee_name flex flex_jc_c flex_dir_c flex_ai_c">
                    <HistoryBack/>
                    <span className="k_name">에이지드 수마트라</span>
                    <span className="e_name">Aged Sumatra</span>  
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
                                <span>Aged Sumatra</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

                <section className="sub_section">
                    <div className="cont_1 flex flex_jc_sb">
                        <div className="img_box">
                            <img src={aged} alt=""></img>
                        </div>
                        <div className="coffee_info">
                            <div className="coffee_origin">
                                <span className="bullet">원산지 : </span>
                                <span>아시아/태평양(인도네시아)</span>
                            </div>
                            <ul className="info_box">
                                <li className="tasting_note">
                                    <div className="sub_tit">Tasting Notes</div>
                                    <div>비가 그친 숲속의 나무 향, 다채로운 스파이스의 풍미</div>
                                </li>
                                <li className="enjoy_with">
                                    <div className="sub_tit">Enjoy with</div>
                                    <div>스파이스</div>
                                </li>
                                <li className="processing">
                                    <div className="sub_tit">Processing Method</div>
                                    <div>반수세식 가공</div>
                                </li>
                                <li className="body">
                                    <div className="sub_tit">Body</div>
                                    <div className="flex flex_ai_c">
                                        <span className="levels">무거움</span>
                                        <span className="stars"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStar/></span>
                                    </div>
                                </li>
                                <li className="acidity">
                                    <div className="sub_tit">Acidity</div>
                                    <div className="flex flex_ai_c">
                                        <span className="levels">낮음</span>
                                        <span className="stars"><BsStarFill/><BsStarFill/><BsStar/><BsStar/><BsStar/></span>
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
                                {ExtrantionList.type().props.children[2]}
                            </ul>
                        </div>
                        <div className="txt_box">
                            <div className="sub_tit bullet">커피 스토리</div>
                            <ul>
                                <li>에이지드 커피의 시작은 오랜 커피 역사 속에서 찾아볼 수 있습니다. 오래전, 인도네시아 섬에서 수확한 커피를 싣고 유럽으로 향하던 무역선 안에서 커피 생두는 오랜 항해 기간 동안 풍미가 달라졌습니다. </li>
                                <li>독특한 삼나무 향과 흙 내음이 매력적인 수마트라 커피는 무역선이 유럽에 다다를 때쯤 더욱 강렬하고 이국적인 풍미로 변해있었습니다.</li>
                                <li>우리는 이 독특한 풍미를 재현하기 위해서, 최고의 수마트라 커피만을 엄선한 뒤 별도의 숙성 창고에서 최소 3년에서 길게는 5년의 숙성 과정을 통해 이 커피를 만들어냅니다. </li>
                                <li>올해의 에이지드 수마트라는 깊은 숲속의 촉촉한 나무 향, 솔잎과 흙냄새 그리고 고소함과 쌉쌀함이 어우러지는 피니시가 매력적입니다.</li>
                            </ul>
                        </div>
                    </div> 
                </section>
            <RFooter/>
        </>
    )
}

export default Aged;