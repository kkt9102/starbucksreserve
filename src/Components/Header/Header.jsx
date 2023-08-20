import { Link } from "react-scroll";

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
  return(
    <header className="fixed">
      <nav>
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