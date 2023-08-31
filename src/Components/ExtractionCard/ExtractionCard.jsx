import colver_icon from '../../Assets/Images/clover_icon.png';
import blackeagle_icon from '../../Assets/Images/black_eagle_icon.png';
import pourover_icon from '../../Assets/Images/poc_icon.png';
import chemex_icon from '../../Assets/Images/chemex_icon.png';
import coldbrew_icon from '../../Assets/Images/cold_brew_icon.png';

const ExtraList = [
  {
    name: 'COLVER',
    img: colver_icon,
    txt: `깊은 풍미에 진하고 \n`
    +`강한 맛을 원하면`
  },
  {
    name: 'BLACKEAGLE',
    img: blackeagle_icon,
    txt: `진하고 깊은 \n`
    +`에스프레소 풍미를 \n` 
    +`다체롭게 즐기고 싶다면`
  },
  {
    name: 'POUROVER',
    img: pourover_icon,
    txt: `은은한 커피향에 \n`
    +`부드럽고 깔끔한 풍미를 \n`
    +`느끼고 싶다면`
  },
  {
    name: 'CHEMEX',
    img: chemex_icon,
    txt: `풍부한 커피향과 균형잡힌 \n`
    +`풍미를 느끼고 싶다면`
  },
  {
    name: 'COLDBREW',
    img: coldbrew_icon,
    txt: `달콤함과 부드러운 풍미를 \n`
    +`동시에 느끼고 싶다면`

  },
]

const ExtractionCard = () => {
  return(
    <ul className='flex flex_jc_sb'>
      {ExtraList.map((card) =>
        <li key={card.name} className='relative flex flex_jc_c cursor_p'>
          <div className='card_top '>
            <div className='img_box'>
              <img src={card.img} alt="" />
            </div>
            <div className='card_tit '>{card.name}</div>
            <div className='card_bottom txt_box'>
              <div className='sub_txt'>{card.txt}</div>
            </div>
          </div>
        </li>
      )}
    </ul>
  )
}

export default ExtractionCard;