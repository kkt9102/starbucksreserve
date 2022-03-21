import React from "react";

import $ from 'jquery';

import RHeader from './include/reserve_header';
import ReserveSC1 from './reserve_section_1';
import ReserveSC2 from './reserve_section_2';
import ReserveSC3 from './reserve_section_3';
import ReserveSC4 from './reserve_section_4';
import ReserveSC5 from './reserve_section_5';
import RFooter from './include/reserve_footer';

$(document).ready(function(){
    alert('해당 페이지는 개인포트폴리오용으로 제작되었습니다.');
})

const Index = () => {

    return (
        <>
            <RHeader/>
            <ReserveSC1/>
            <ReserveSC2/>
            <ReserveSC3/>
            <ReserveSC4/>
            <ReserveSC5/>
            <RFooter/>
        </>
    )
}

export default Index;