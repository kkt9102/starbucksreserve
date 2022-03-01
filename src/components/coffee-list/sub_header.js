import React from "react";

import { Link, useLocation } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";


import '../../resources/css/common.css';
import '../../resources/css/style.css';

const SHeader = () => {
    const location = useLocation();
    console.log({location});
    return(
        <>
            <div className="sub_header">
                <div className="coffee_name flex flex_jc_c flex_dir_c flex_ai_c">
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
                                <span></span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default SHeader;