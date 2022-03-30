import React from 'react';
import {GiCoffeeBeans} from 'react-icons/gi';
import $ from 'jquery';
import Css from './css';
import Logo from '../../resources/img/reserve_logo.svg';

$(window).ready(function(){
    setTimeout(function(){
        $('body').css('overflowY','auto');
        $('.loading').fadeOut();
    },2000);
})

const Loading = () => {
    return(
        <>
            <div className='loading fixed'>
                <Css/>
                <div id="loding_logo">
                    <GiCoffeeBeans/>
                    {/* <img src={Logo} alt="스타벅스 로고"></img> */}
                </div>
            </div>
        </>
    )
}

export default Loading;