import React from "react";
import { Link } from "react-router-dom";

//img
import panama from '../../resources/img/coffee_list/Panama Boquete.jpg';
import aged from '../../resources/img/coffee_list/Aged Sumatra.jpg';
import hawail from '../../resources/img/coffee_list/Hawaii Ka’u.jpg';
import christmas from '../../resources/img/coffee_list/Christmas.jpg';
import bolivia from '../../resources/img/coffee_list/Bolivia Sol de la Manana.jpg';
import zambia from '../../resources/img/coffee_list/Zambia Isanya Estate.jpg';
import rwanda from '../../resources/img/coffee_list/Rwanda Sholi.jpg';
import ecuador from '../../resources/img/coffee_list/Ecuador Loja.jpg';
import miniLogo from '../../resources/img/coffee_list_logo.svg';

const Item = ({item}) => {
    const url = `${item.links}`
    return (
        <li className="coffee_item">
            {/* <Link to={url} key={item.id}> */}
            <Link to={{
                pathname: `${url}`,
                state: {
                    k_name: `${item.coffee_k_name}`,
                    e_name: `${item.coffee_e_name}`
                }
            }} key={item.id}>
                <div className="img_box">
                    <img src={item.image} alt=""></img>
                    <div className="coffee_target">
                        <div className="logo">
                            <img src={miniLogo} alt="리저브 로고"></img>
                        </div>
                        <div className="coffee_name">{item.coffee_k_name}</div>
                    </div>
                </div>
            </Link>
        </li>
    );
 }
  
 const CoffeeList = () => {
    const items = [
        {
            id: 1,
            coffee_k_name: '파나마 보케테',
            coffee_e_name: 'Panama Boquete',
            image: `${panama}`,
            links: 'panama'
        },
        {
            id: 2,
            coffee_k_name: '에이지드 수마트라',
            coffee_e_name: 'Aged Sumatra',
            image: `${aged}`,
            links: 'aged'
        },
        {
            id: 3,
            coffee_k_name: '하와이 카우',
            coffee_e_name: 'Hawaii Ka’u',
            image: `${hawail}`,
            links: 'hawail'
        },
        {
            id: 4,
            coffee_k_name: '크리스마스',
            coffee_e_name: 'Christmas',
            image: `${christmas}`,
            links: 'christmas'
        },
        {
            id: 5,
            coffee_k_name: '볼리비아 솔 데 라 마냐나',
            coffee_e_name: 'Bolivia Sol de la Manana',
            image: `${bolivia}`,
            links: 'bolivia'
        },
        {
            id: 6,
            coffee_k_name: '잠비아 이사냐 에스테이트',
            coffee_e_name: 'Zambia Isanya Estate',
            image: `${zambia}`,
            links: 'zambia'
        },
        {
            id: 7,
            coffee_k_name: '르완다 쇼리',
            coffee_e_name: 'Rwanda Sholi',
            image: `${rwanda}`,
            links: 'rwanda'
        },
        {
            id: 8,
            coffee_k_name: '에콰도르 로아',
            coffee_e_name: 'Ecuador Loja',
            image: `${ecuador}`,
            links: 'ecuador'
        }
    ];
  
    return (
        <>
        {items.map((item,index) => (<Item item={item} key={index} />))}
        </>
    )
}

export default CoffeeList;