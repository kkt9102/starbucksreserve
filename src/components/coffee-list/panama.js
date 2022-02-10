import React, { useState } from "react";

import SHeader from "../include/sub_header";
import RFooter from '../include/reserve_footer';

// img
import panama from '../../resources/img/coffee_list/Panama Boquete.jpg';

const Panama = () => {
    
    return (
        <>
            <SHeader/>
                <section className="sub_section">
                    <div className="cont_1 flex flex_jc_sb">
                        <div className="img_box">
                            <img src={panama} alt=""></img>
                        </div>
                        <div className="txt_box">

                        </div>
                    </div>
                </section>
            <RFooter/>
        </>
    )
}

export default Panama;