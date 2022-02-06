import React from "react";
import RHeader from './include/reserve_header';
import ReserveSC1 from './reserve_section_1';
import ReserveSC2 from './reserve_section_2';
import ReserveSC3 from './reserve_section_3';
import ReserveSC4 from './reserve_section_4';
import ReserveSC5 from './reserve_section_5';
import RFooter from './include/reserve_footer';

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