import { Link } from 'react-router-dom';

import FooterNav from '../../Data/FooterNavigation.json';

const Footer = () => {
  return(
    <footer>
      <nav className="footer_nav">
        <ul className='flex flex_jc_sb flex_ai_c'>
          {FooterNav.FooterNav.map((items) =>
            <li key={items.name}>
              <Link>
                {items.name}
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <div className='site_menu_box'>
        <ul className='flex flex_jc_sa flex_ai_c'>
          {FooterNav.SiteMenu.map((items) =>
            <li key={items.name} className='flex flex_jc_c flex_ai_c cursor_p'>
                {items.name}
            </li>
          )}
        </ul>
      </div>
      <div className='company_info flex flex_jc_c'>
        <div>
          <div className='registration_num'>사업자등록번호 : </div>
          <div className='value'>201-81-21515</div>
        </div>
        <div>
          <div className='value'>주식회사 에스씨케이컴퍼니</div>
        </div>
        <div className='owner'>
          <div className='key'>대표이사 : </div>
          <div className='value'>송 데이비드 호섭</div>
        </div>
        <div className='tel'>
          <div className='key'>TEL : </div>
          <div className='value'>1522-3232</div>
        </div>
        <div className='private_admin'>
          <div className='key'>개인정보 책임자 : </div>
          <div className='value'>하익성</div>
        </div>
      </div>
      <div className="copyright flex flex_jc_c">ⓒ 2022 Starbucks Coffee Company. All Rights Reserved.</div>
    </footer>
  )
}

export default Footer