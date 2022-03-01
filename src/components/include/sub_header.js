import React from "react";

import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";


import '../../resources/css/common.css';
import '../../resources/css/style.css';

const SHeader = ({item}) => {
    return(
        <>
            <div className="sub_header">
                <div className="coffee_name flex flex_jc_c"></div>
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