import { useRecoilValue } from 'recoil';

import { scrollState } from '../../State/scrollState';

const MenuItems = [
  {
    name: 'HOME',
    id: 1,
  },
  {
    name: `WHAT'S RESERVE`,
    id: 2,
  },
  {
    name: 'EXTRACTION',
    id: 3,
  },
  {
    name: 'COFFEE',
    id: 4,
  },
  {
    name: 'LOACTION',
    id: 5,
  },
];

const Header = () => {
  const headerEffect = useRecoilValue(scrollState);
  const onFocusScroll = (e) => {
    const Elements = document.querySelector(`#focus_${e}`);
    const getPosition = Elements?.offsetTop;

    window.scrollTo({ top: getPosition, behavior: 'smooth' });
  };
  return (
    <header className="fixed">
      <nav className={!headerEffect ? 'active' : ''}>
        <ul className="flex flex_jc_sb">
          {MenuItems.map((item, index) => (
            <li key={index} className="flex flex_ai_c">
              <span
                to={`re_sc_${index}`}
                onClick={(e) => onFocusScroll(item.id)}
                className="flex_ai_c"
                tabIndex="0"
                href="#!"
              >
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
