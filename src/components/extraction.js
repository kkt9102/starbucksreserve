import { useState, useEffect } from "react";
import $ from "jquery";
import '../resources/css/style.css';
// img
import clover_icon from "../resources/img/clover_icon.png";
import b_e_icon from "../resources/img/black_eagle_icon.png";
import poc_icon from "../resources/img/poc_icon.png";
import chemex_icon from "../resources/img/chemex_icon.png";
import c_b_icon from "../resources/img/cold_brew_icon.png";

export const items = [{
    id: 1,
    name: 'COLVER',
    icon: `${clover_icon}`,
    txt: '깊은 풍미에 \n 진하고 강한 맛을 원하면',
},
{
    id: 2,
    name: 'BLACKEAGLE',
    icon: `${b_e_icon}`,
    txt: '진하고 깊은 \n 에스프레소 풍미를 \n 다체롭게 즐기고 싶다면',
},
{
    id: 3,
    name: 'POUROVER',
    icon: `${poc_icon}`,
    txt: '은은한 커피향에 \n 부드럽고 깔끔한 풍미를 \n 느끼고 싶다면',
},
{
    id: 4,
    name: 'CHEMEX',
    icon: `${chemex_icon}`,
    txt: '풍부한 커피향과 \n 균형잡힌 풍미를 \n 느끼고 싶다면',
},
{
    id: 5,
    name: 'COLDBREW',
    icon: `${c_b_icon}`,
    txt: '달콤함과 부드러운 풍미를 \n 동시에 느끼고 싶다면',
}];

export const Item = ({item}) => {


    return (
        <li id={item.name}>
            <div className="border_b">
                <div className="flex flex_jc_c flex_wrap_wrap" title='test'>
                    
                    <div className="img_box">
                        <img src={item.icon} alt={item.name}></img>
                    </div>
                    <div className="txt_box flex flex_jc_c flex_wrap_wrap">
                        <div className="sub_tit flex flex_jc_c">{item.name}</div>
                        <div className="sub_txt">{item.txt}</div>
                    </div>
                </div>
            </div>
        </li>
    );
}


export const ExtrantionList = () => {
    return (
        <>
        {items.map(item => (<Item item={item} key={item.id} />))}
        </>
    )
}
// 상세페이지 추천 추출방식 뿌리기용
const elements = items.map(item => (<Item item={item} key={item.id} />));

export const type = () => {
    return (
        <>
            {elements}
        </>
    )
}

// 팝업 뿌리기용
const PopupInfo = items.map(item => (<Item item={item} key={item.id} />));

export const Pop = () => {
    return (
        <>
            {PopupInfo}
        </>
    )
}

export default ExtrantionList;

