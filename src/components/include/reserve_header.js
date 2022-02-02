import React,{useState, useEffect}  from "react";
import { useScroll } from "../../utils/scrollMove";
import { Link } from 'react-scroll';
import '../../resources/css/style.css';

function RHeader() {
    const {scrollY} = useScroll();
    return(
        <>
            <header className={`${scrollY < 100 ? "y_Top" : "y_move"} top_menu fixed`}>
                <nav>
                    <ul className="flex flex_jc_sb">
                        <Link to="re_sc_1" spy={true} smooth={true}>
                            <li className="flex flex_ai_c">HOME</li>
                        </Link>
                        <Link to="re_sc_2" spy={true} smooth={true}>
                            <li className="flex flex_ai_c">WHAT'S RESERVE</li>
                        </Link>
                        <Link to="re_sc_3" spy={true} smooth={true}>
                            <li className="flex flex_ai_c">EXTRACTION</li>
                        </Link>
                        <Link to="re_sc_4" spy={true} smooth={true}>
                            <li className="flex flex_ai_c">COFFEE</li>
                        </Link>
                        <Link to="re_sc_5" spy={true} smooth={true}>
                            <li className="flex flex_ai_c">LOACTION</li>
                        </Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default RHeader;