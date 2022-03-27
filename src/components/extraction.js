import { useState } from "react";

import Modal from "./popup";
import '../resources/css/style.css';
// img
import clover_icon from "../resources/img/clover_icon.png";
import b_e_icon from "../resources/img/black_eagle_icon.png";
import poc_icon from "../resources/img/poc_icon.png";
import chemex_icon from "../resources/img/chemex_icon.png";
import c_b_icon from "../resources/img/cold_brew_icon.png";

import clover_img from '../resources/img/extraction/clover_photo.gif';
import b_e_img from '../resources/img/extraction/blackeagle_photo.gif';
import poc_img from '../resources/img/extraction/poc_photo.gif';
import chemex_img from '../resources/img/extraction/chemex_photo.gif';
import c_b_img from "../resources/img/extraction/coldbrew_photo.gif";

export const items = [{
    id: 1,
    name: 'COLVER',
    icon: `${clover_icon}`,
    txt: '깊은 풍미에 \n 진하고 강한 맛을 원하면',
    popupImg: `${clover_img}`,
    popupKoName: '클로버',
    popupTxt: '클로버(Clover)는 진공 압착 추출 방식으로 원두가 가지고 있는 다양한 풍미와 오일까지 추출합니다. 풍미 가득한 원두를 마치 커피 프레스로 내린 듯 진한 맛과 함께 마이크로 필터로 추출하여 깔끔한 맛을 유지합니다.',
},
{
    id: 2,
    name: 'BLACKEAGLE',
    icon: `${b_e_icon}`,
    txt: '진하고 깊은 \n 에스프레소 풍미를 \n 다체롭게 즐기고 싶다면',
    popupImg: `${b_e_img}`,
    popupKoName: '블랙이글',
    popupTxt: '리저브의 모든 에스프레소 음료는 월드 바리스타 챔피언십 공식 머신인 블랙이글(Black Eagle)로 추출합니다. 블랙이글 머신과 리저브 원두가 만나 풍부한 아로마와 진하고 깊은 풍미를 가진 다채로운 리저브 에스프레소 음료들이 완성됩니다.',
},
{
    id: 3,
    name: 'POUROVER',
    icon: `${poc_icon}`,
    txt: '은은한 커피향에 \n 부드럽고 깔끔한 풍미를 \n 느끼고 싶다면',
    popupImg: `${poc_img}`,
    popupKoName: '푸어 오버',
    popupTxt: '푸어 오버(Pour Over)는 가장 전통적인 커피 추출 방식의 하나로, 은은한 커피향과 부드럽고 깔끔한 풍미를 느낄 수 있습니다. 가늘게 그라인딩 한 커피를 종이 필터 위에 소복이 담고 부드럽게 원을 그리며 물을 붓습니다. 필터를 통해 떨어지는 커피 방울이 섬세한 향과 풍미를 생생하게 담아내어 부드럽고 깔끔한 한 잔의 커피를 완성합니다.',
},
{
    id: 4,
    name: 'CHEMEX',
    icon: `${chemex_icon}`,
    txt: '풍부한 커피향과 \n 균형잡힌 풍미를 \n 느끼고 싶다면',
    popupImg: `${chemex_img}`,
    popupKoName: '케맥스',
    popupTxt: '케맥스(Chemex)는 시간과 무게를 정확히 지켜 추출하는 방식으로, 완벽하게 균형 잡힌 커피와 매끄러운 바디감을 느낄 수 있습니다. 완전히 밀착된 두툼한 곡물 필터가 공기의 흐름을 막아 풍부한 향을 가득 담은 커피를 만들어 냅니다.',
},
{
    id: 5,
    name: 'COLDBREW',
    icon: `${c_b_icon}`,
    txt: '달콤함과 부드러운 풍미를 \n 동시에 느끼고 싶다면',
    popupImg: `${c_b_img}`,
    popupKoName: '콜드부르',
    popupTxt: '콜드브루(Cold Brew)는 리저브 전용 콜드브루 원두에 커피 마스터의 14시간 정성이 더해져 깊고 부드러운 풀 바디감과 달콤한 풍미를 함께 느낄 수 있습니다. 나이트로 콜드브루도 부드럽게 즐길 수 있는 리저브만의 콜드브루를 경험해 보세요.',
}];

export const Item = ({item}) => {
    const [PopupOpen,setPopupOpen] = useState(false);
    const PageWidth = document.documentElement.scrollWidth;

    const openPop = () => {
        setPopupOpen(true);
        if (PageWidth < 768) {
            if ( document.getElementById('header')) {
                document.getElementById('header').style.zIndex = 0;
            }
        }

        // console.log(EventTarget.id);
    }

    const closePop = () => {
        setPopupOpen(false);
        if (PageWidth < 768) {
            if ( document.getElementById('header')) {
            document.getElementById('header').style.zIndex = 10;
            }
        }
    }

    return (
        <>
            <li id={item.name} onClick={() => {
                    // console.log(`${item.id}`)
                    closePop()
                    openPop(`${item.id}`)
                }
            }>
                <div className="border_b">
                    <div className="flex flex_jc_c flex_wrap_wrap">
                        
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
            <Modal open={PopupOpen} close={closePop} title={`${item.name}`} KoTitle={`${item.popupKoName}`} photo={`${item.popupImg}`} txt={`${item.popupTxt}`}/>
        </>
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

