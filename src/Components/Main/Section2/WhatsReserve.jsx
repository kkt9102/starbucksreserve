import section_tit from "../../../Assets/Images/section_2_tit.png";

const WhatsReserve = () => {
  return(
    <div className="section_view re_sc_1">
      <div className="page_title">
        <div className="img_box">
          <img src={section_tit} alt="" />
        </div>
      </div>
      <div className="txt_box flex flex_dir_c flex_jc_c flex_ai_c">
        <div className="sub_txt">가장 진귀하고 이국적이며 정교한 풍미의 커피</div>
        <div className="sub_tit">스타벅스 리저브™커피는 아주 진귀하고 특별한 커피입니다.</div>
        <div className="cont_1">
          <ol>
            <li>적은 수량 때문에 모든 분들에게 선보일 수 없으나, 독특한 맛과 향은 리저브 커피를 더욱 소중하게 만듭니다.</li>
            <li>가장 신선한 상태에서 손으로 골라낸 커피는 이 세상에서 가장 훌륭한 최상의 커피이자, 스타벅스에서 제공하는 특별한 경험입니다.</li>
            <li>남부 탄자니아의 고지대부터 자메이카의 블루 마운틴까지, 여러분을 새로운 커피 여정으로 초대합니다.</li>
          </ol>
        </div>
        <div className="cont_2">
          <ol>
            <li>스타벅스 커피팀은 고객에게 최고품질의 커피를 제공하기 위해 매년 25만잔의 커피를 테스트 합니다.</li>
            <li>스타벅스 커피 전문가들은 커피농가와 돈독한 인연을 이여오며, 세계 최고급 커피 원두중에서도 상위 3%를 찾기위해 세계 각지를 여행하고,</li>
            <li>그 여정 속에서 이국적이고 희귀하며 가치가 있는 매우 특별한 원두를 발견하고 있습니다.</li>
            <li>단일 원산지에서 극소량만 재배되어 한정된 기간에만 만나볼 수 있는 진귀한 고품질의 원두를 스타벅스 리저브™에서 만나보세요.</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default WhatsReserve