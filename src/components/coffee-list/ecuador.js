import React from "react";

import { Link, useLocation } from 'react-router-dom';
import {BsStarFill, BsStar} from 'react-icons/bs';
import { MdKeyboardArrowRight } from "react-icons/md";

// import SHeader from "./sub_header";
import RFooter from '../include/reserve_footer';



// img
import ecuador from '../../resources/img/coffee_list/Ecuador Loja.jpg';

const Ecuador = ({match}) => {
    const username = useLocation();
    console.log(username);
    return (
        <>
            {/* <SHeader/> */}

            <div className="sub_header">
                <div className="coffee_name flex flex_jc_c flex_dir_c flex_ai_c">
                    <span className="k_name">에콰도르 로하</span>
                    <span className="e_name">Ecuador Loja</span>  
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
                                <span>Ecuador Loja</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

                <section className="sub_section">
                    <div className="cont_1 flex flex_jc_sb">
                        <div className="img_box">
                            <img src={ecuador} alt=""></img>
                        </div>
                        <div className="coffee_info">
                            <div className="coffee_origin">
                                <span>원산지 : </span>
                                <span>라틴아메리카(에콰도르)</span>
                            </div>
                            <ul className="info_box">
                                <li className="tasting_note">
                                    <div className="sub_tit">Tasting Notes</div>
                                    <div>싱그러운 허브의 은은한 달콤함과 카카오닙스의 쌉쌀한 피니쉬</div>
                                </li>
                                <li className="enjoy_with">
                                    <div className="sub_tit">Enjoy with</div>
                                    <div>시트러스, 캐러멜, 다크 초콜릿</div>
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
                    <div className="cont_2">
                        <div className="txt_box">
                            <ul>
                                <li>적도 바로 아래에 위치한 에콰도르 로하 지역은 다양한 동식물이 공존할 뿐만 아니라 영양이 풍부한 화산토양, 건기와 우기가 뚜렷한 열대 기후까지 커피 재배를 위한 완벽한 환경을 갖추고 있습니다.</li>
                                <li>에콰도르 로하의 엽서 디자인은 이러한 환경을 표현할 뿐만 아니라 이 커피가 가진 독특한 매력을 그려내고 있습니다.</li>
                                <li>들판에 핀 야생화를 닮은 커피의 아로마, 싱그러운 허브에서 느껴지는 은은한 산미와 달콤한 풍미, 야생화와 들풀속에 숨어있는 재규어를 연상시키는 카카오닙스의 쌉쌀한 피니쉬까지.</li>
                                <li>무더운 여름, 아이스 커피로도 더할 나위 없는 매력을 가진 에콰도르 로하를 만나보세요.</li>
                            </ul>
                        </div>
                    </div> 
                </section>
            <RFooter/>
        </>
    )
}

export default Ecuador;