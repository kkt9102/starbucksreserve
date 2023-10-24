import { Link } from "react-scroll";
import { useRecoilValue } from "recoil";

import { scrollState } from "../../State/scrollState";

const MenuItems = [
  {
    name: 'HOME',
  },
  {
    name: `WHAT'S RESERVE`,
  },
  {
    name: 'EXTRACTION',
  },
  {
    name: 'COFFEE',
  },
  {
    name: 'LOACTION',
  },
]

const Header = () => {
  const headerEffect = useRecoilValue(scrollState)
  return(
    <header className="fixed">
      <nav className={!headerEffect ? 'active' : ''}>
        <ul className='flex flex_jc_sb'>
          {MenuItems.map((item, index) =>
            <li key={index} className='flex flex_ai_c'>
              <Link to={`re_sc_${index}`} spy={true} smooth={true} className="flex_ai_c" tabIndex="0" href="#!">{item.name}</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header;