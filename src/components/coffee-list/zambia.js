import React from "react";

import { Link, useLocation } from 'react-router-dom';
import {BsStarFill, BsStar} from 'react-icons/bs';
import { MdKeyboardArrowRight } from "react-icons/md";

// import SHeader from "./sub_header";
import RFooter from '../include/reserve_footer';



// img
import zambia from '../../resources/img/coffee_list/Zambia Isanya Estate.jpg';

const Zambia = ({match}) => {
    const username = useLocation();
    console.log(username);
    return (
        <>
            {/* <SHeader/> */}

            <div className="sub_header">
                <div className="coffee_name flex flex_jc_c flex_dir_c flex_ai_c">
                    <span className="k_name">잠비아 이사냐 에스테이트</span>
                    <span className="e_name">Zambia Isanya Estate</span>  
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
                                <span>Zambia Isanya Estate</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

                <section className="sub_section">
                    <div className="cont_1 flex flex_jc_sb">
                        <div className="img_box">
                            <img src={zambia} alt=""></img>
                        </div>
                        <div className="coffee_info">
                            <div className="coffee_origin">
                                <span>원산지 : </span>
                                <span>아프리카(잠비아)</span>
                            </div>
                            <ul className="info_box">
                                <li className="tasting_note">
                                    <div className="sub_tit">Tasting Notes</div>
                                    <div>톡 쏘는 스타프루트 향에 카다몬과 베이킹 초콜릿 향이 가미된 커피 * 원산지 : 아프리카(잠비아)</div>
                                </li>
                                <li className="enjoy_with">
                                    <div className="sub_tit">Enjoy with</div>
                                    <div>밀크 초콜릿, 시트러스, 카라멜</div>
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
                                <li>많은 커피 애호가들이 아프리카 커피로 케냐와 에티오피아 원두를 떠올리지만 잠비아 커피에도 아프리카 지역만의 독특한 풍미가 살아 있습니다.</li>
                                <li>아프리카의 작은 나라인 잠비아는 인상적인 떼루아를 품고 있으며, 산악 지대가 많고 운송 인프라가 낙후된 내륙 국가라는 단점을 극복하여 이러한 진귀한 원두를 세상에 내놓고 있습니다.</li>
                                <li>카드 디자인에는 내륙에서 수확된 커피가 트럭과 기차로 여러 국가를 통과하여 항구까지 운송되는 험난한 여정이 담겨 있습니다.</li>
                                <li>이 길고 험난한 여정은 카드 전체에 뻗어 있는 지형으로 묘사되어 있습니다. 화려한 배경 색상은 산뜻하면서도 풍미가 가득한 스타프루트 향과 잠비아의 아름다운 풍경을 표현합니다.</li>
                            </ul>
                        </div>
                    </div> 
                </section>
            <RFooter/>
        </>
    )
}

export default Zambia;