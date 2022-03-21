import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import Slider from "react-slick";
import '../resources/css/style.css';
import CoffeeList from "./coffee-list/name";

import S_4_tit from "../resources/img/section_4_tit.png";

const ReserveSC4 = () => {
    const location = useLocation();

    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: 'block', left: 103 +'%', width: 10, height: 10, fontSize: 15 }}
            onClick={onClick}
            />
          );
        }
        const NextArrow = (props) => {
          const { className, style, onClick } = props;
          return (
            <div
              className={className}
              style={{ ...style, display: 'block', top:5, right: -4.7 + '%', width: 10, height: 10, fontSize: 15 }}
              onClick={onClick}
                  />
                );
              }
  
      const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          centerMode: true,
          centerPadding: 40,
          autoplay: true,
          autoplaySpeed: 3000,
          prevArrow: <PrevArrow/>,
          nextArrow: <NextArrow/>
      };

    const PageWidth = document.documentElement.scrollWidth;

    
        return(
            <>
                <section id="section_4" className="section re_sc_4">
                    <div className="con">
                        <div className="section_tit flex flex_jc_c flex_wrap_wrap">
                            <img src={S_4_tit} alt="리저브 원두 RESERVE™ COFFEE"></img>
                            <div className="sub_tit flex flex_jc_c">스타벅스 리저브™에서 느끼는 전세계의 특별한 커피</div>
                        </div>
                        <div className="cont_1">
                            <ul className="flex flex_jc_sb flex_wrap_wrap">
                                <CoffeeList/>
                                {/* <div><Link to={`${location.search}`}>{location.pathName}</Link></div> */}
                            </ul>
                        </div>
                    </div>
                </section>
            </>
        )
    
}

export default ReserveSC4;