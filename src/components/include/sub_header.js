import React from "react";
import { Link } from "react-router-dom";
import '../../resources/css/common.css';
import '../../resources/css/style.css';

const SHeader = () => {
    return(
        <>
            <div className="sub_header">
                <div className="coffee_name flex flex_jc_c">파나마 보케테</div>
                <nav className="menu_nav">
                    <ul className="flex">
                        <li className="history_back"><Link to="/">HOME</Link></li>
                        <li>COFFEE</li>
                        <li><Link to="">Panama</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default SHeader;