import { useState, useEffect } from "react";
import $ from "jquery";
import '../resources/css/style.css';
// img
import clover_icon from "../resources/img/clover_icon.png";
import b_e_icon from "../resources/img/black_eagle_icon.png";
import poc_icon from "../resources/img/poc_icon.png";
import chemex_icon from "../resources/img/chemex_icon.png";
import c_b_icon from "../resources/img/cold_brew_icon.png";

function popup(){
    $(document).ready(function(){
        const $list = $('.extra_list > ul > li');
        
        $list.click(function(){
            const $index = $(this).index();
            $(this).addClass('active');
            console.log($index);
        });
    })
}

$(function(){
    popup();
})

function ExtrantionList(){
    return (
        <>
            <nav className="extraction_list extra_list">
                <ul className="flex flex_jc_sb">
                    <li id="clover">
                        <div className="border_b">
                            <div className="flex flex_jc_c flex_wrap_wrap">
                                <div className="img_box">
                                    <img src={clover_icon} alt="CLOVER"></img>
                                </div>
                                <div className="txt_box flex flex_jc_c flex_wrap_wrap">
                                    <div className="sub_tit flex flex_jc_c">CLOVER</div>
                                    <div className="sub_txt">깊은 풍미에<br/>진하고 강한 맛을 원하면</div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li id="blackeagle">
                        <div className="border_b">
                            <div className="flex flex_jc_c flex_wrap_wrap">
                                <div className="img_box">
                                    <img src={b_e_icon} alt="BLACK EAGLE"></img>
                                </div>
                                <div className="txt_box flex flex_jc_c flex_wrap_wrap">
                                    <div className="sub_tit flex flex_jc_c">BLACK-EAGLE</div>
                                    <div className="sub_txt">진하고 깊은<br/>에스프레소 풍미를<br/>다체롭게 즐기고 싶다면</div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li id="pourover">
                        <div className="border_b">
                            <div className="flex flex_jc_c flex_wrap_wrap">
                                <div className="img_box">
                                    <img src={poc_icon} alt="POUR OVER"></img>
                                </div>
                                <div className="txt_box flex flex_jc_c flex_wrap_wrap">
                                    <div className="sub_tit flex flex_jc_c">POUR OVER</div>
                                    <div className="sub_txt">은은한 커피향에<br/>부드럽고 깔끔한 풍미를<br/>느끼고 싶다면</div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li id="chemex">
                        <div className="border_b">
                            <div className="flex flex_jc_c flex_wrap_wrap">
                                <div className="img_box">
                                    <img src={chemex_icon} alt="CHEMEX"></img>
                                </div>
                                <div className="txt_box flex flex_jc_c flex_wrap_wrap">
                                    <div className="sub_tit flex flex_jc_c">CHEMEX</div>
                                    <div className="sub_txt">풍부한 커피향과<br/>균형잡힌 풍미를<br/>느끼고 싶다면</div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li id="coldbrew">
                        <div className="border_b">
                            <div className="flex flex_jc_c flex_wrap_wrap">
                                <div className="img_box">
                                    <img src={c_b_icon} alt="COLD BREW"></img>
                                </div>
                                <div className="txt_box flex flex_jc_c flex_wrap_wrap">
                                    <div className="sub_tit flex flex_jc_c">COLD BREW</div>
                                    <div className="sub_txt">달콤함과 부드러운 풍미를<br/>동시에 느끼고 싶다면</div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default ExtrantionList;