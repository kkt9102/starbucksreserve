import React from "react";

import { Link, useLocation } from 'react-router-dom';
import {BsStarFill, BsStar} from 'react-icons/bs';
import { MdKeyboardArrowRight } from "react-icons/md";

// import SHeader from "./sub_header";
import RFooter from '../include/reserve_footer';



// img
import bolivia from '../../resources/img/coffee_list/Bolivia Sol de la Manana.jpg';

const Bolivia = ({match}) => {
    const username = useLocation();
    console.log(username);
    return (
        <>
            {/* <SHeader/> */}

            <div className="sub_header">
                <div className="coffee_name flex flex_jc_c flex_dir_c flex_ai_c">
                    <span className="k_name">볼리비아 솔 데 라 마냐나</span>
                    <span className="e_name">Bolivia Sol de la Manana</span>  
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
                                <span>Bolivia Sol de la Manana</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

                <section className="sub_section">
                    <div className="cont_1 flex flex_jc_sb">
                        <div className="img_box">
                            <img src={bolivia} alt=""></img>
                        </div>
                        <div className="coffee_info">
                            <div className="coffee_origin">
                                <span>원산지 : </span>
                                <span>라틴아메리카(볼리비아)</span>
                            </div>
                            <ul className="info_box">
                                <li className="tasting_note">
                                    <div className="sub_tit">Tasting Notes</div>
                                    <div>구운 견과류와 보리를 닮은 고소함, 스모키한 번트 카라멜 피니쉬의 커피</div>
                                </li>
                                <li className="enjoy_with">
                                    <div className="sub_tit">Enjoy with</div>
                                    <div>구운 견과류, 번트 카라멜</div>
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
                                        <span className="levels">낮음</span>
                                        <span className="stars"><BsStarFill/><BsStarFill/><BsStar/><BsStar/><BsStar/></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="cont_2">
                        <div className="txt_box">
                            <ul>
                                <li>로드리게즈 농장의 솔 데 라 마냐나 프로그램을 통해 재배된 이 커피는 볼리비아 스페셜티 커피를 대표하는 희망의 상징입니다.</li>
                                <li>페드로 로드리게즈는 지난 30년 동안 볼리비아 커피를 세계에 선보이기 위해 많은 노력을 기울여 왔습니다.</li>
                                <li>블렌딩은 매년 조금씩 달라지지만, 우리가 사랑하는 크리스마스의 강렬하고 생생한 풍미 프로필은 언제나 똑같습니다.</li>
                                <li>2014년에 페드로는 농부들에게 세심한 농사 관리법을 가르치고 뛰어난 품질의 커피를 생산하면서 경제적 안정을 도모하는 솔 데 라 마냐나("아침 햇살") 프로그램을 시작했습니다.</li>
                                <li>현재 100명의 농부들이 이 프로그램에 참여하여 지역 사회의 더 나은 미래를 위해 노력하고 있습니다. 부담 없이 즐길 수 있고 균형 잡힌 부드러운 맛을 선사하는 이 커피는 어떤 추출 방법과도 잘 어울립니다.</li>
                            </ul>
                        </div>
                    </div> 
                </section>
            <RFooter/>
        </>
    )
}

export default Bolivia;