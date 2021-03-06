import React from "react";
import { useScroll } from "../../utils/scrollMove";
import { Link } from 'react-scroll';
import Css from "./css";
import '../../resources/css/style.css';

const RHeader = () => {
    
    const {scrollY} = useScroll();

    return(
        <>
        <Css/>
            <header id="header" className={`${scrollY < 100 ? "y_Top" : "y_move"} top_menu fixed`}>
                <nav>
                    <ul className="flex flex_jc_sb">
                        <li className="flex flex_ai_c">
                            <Link to="re_sc_1" spy={true} smooth={true} className="flex_ai_c" tabIndex="0" href="#!">HOME</Link>
                        </li>
                        <li className="flex flex_ai_c">
                            <Link to="re_sc_2" spy={true} smooth={true} className="flex_ai_c" tabIndex="0" href="#!">WHAT'S RESERVE</Link>
                        </li>
                        <li className="flex flex_ai_c">
                            <Link to="re_sc_3" spy={true} smooth={true} className="flex_ai_c" tabIndex="0" href="#!">EXTRACTION</Link>
                        </li>
                        <li className="flex flex_ai_c">
                            <Link to="re_sc_4" spy={true} smooth={true} className="flex_ai_c" tabIndex="0" href="#!">COFFEE</Link>
                        </li>
                        <li className="flex flex_ai_c">
                            <Link to="re_sc_5" spy={true} smooth={true} className="flex_ai_c" tabIndex="0" href="#!">LOACTION</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default RHeader;