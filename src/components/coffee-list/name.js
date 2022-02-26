import React, { useCallback, useState } from "react";

//img
import panama from '../../resources/img/coffee_list/Panama Boquete.jpg';
import miniLogo from '../../resources/img/coffee_list_logo.svg';


const CoffeeNames = () => {
const [coffee, setCoffee] = useState([
        {
            id: 1,
            coffee_k_name: '파나마 보케테',
            coffee_e_name: 'Panama Boquete',
            image: {panama},
        },
        {
            id: 2,
            coffee_k_name: '에이지드 수마트라',
            coffee_e_name: 'Aged Sumatra',
            image: '',
        },
        {
            id: 3,
            coffee_k_name: '하와이 카우',
            coffee_e_name: 'Hawaii Ka’u',
            image: '',
        },
        {
            id: 4,
            coffee_k_name: '크리스마스',
            coffee_e_name: 'Christmas',
            image: '',
        },
        {
            id: 5,
            coffee_k_name: '볼리비아 솔 데 라 마냐나',
            coffee_e_name: 'Bolivia Sol de la Manana',
            image: '',
        },
        {
            id: 6,
            coffee_k_name: '잠비아 이사냐 에스테이트',
            coffee_e_name: 'Zambia Isanya Estate',
            image: '',
        },
        {
            id: 7,
            coffee_k_name: '르완다 쇼리',
            coffee_e_name: 'Rwanda Sholi',
            image: '',
        },
        {
            id: 8,
            coffee_k_name: '에콰도르 로아',
            coffee_e_name: 'Ecuador Loja',
            image: '',
        }
    ])

    return (
        <>
            <div className="img_box">
                <img src={panama} alt=""></img>
                <div className="coffee_target">
                    <div className="logo">
                        <img src={miniLogo} alt="리저브 로고"></img>
                    </div>
                    <div className="coffee_name"></div>
                </div>
            </div>
        </>
    )
}

export default CoffeeNames;