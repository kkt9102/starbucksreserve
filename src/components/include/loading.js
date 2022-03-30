import React from 'react';
import $ from 'jquery';
import Css from './css';

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
            </div>
        </>
    )
}

export default Loading;