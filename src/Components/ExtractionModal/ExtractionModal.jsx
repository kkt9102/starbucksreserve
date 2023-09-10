import colver_img from '../../Assets/Images/extraction/clover_photo.gif';
import blackeagle_img from '../../Assets/Images/extraction/blackeagle_photo.gif';
import pourover_img from '../../Assets/Images/extraction/poc_photo.gif';
import chemex_img from '../../Assets/Images/extraction/chemex_photo.gif';
import coldbrew_img from '../../Assets/Images/extraction/coldbrew_photo.gif';

const ExrtactionContents = [
  {
    id: 0,
    en_name: 'CLOVER',
    ko_name: '클로버',
    img: colver_img,
    txt: '클로버(Clover)는 진공 압착 추출 방식으로 원두가 가지고 있는 다양한 풍미와 오일까지 추출합니다. 풍미 가득한 원두를 마치 커피 프레스로 내린 듯 진한 맛과 함께 마이크로 필터로 추출하여 깔끔한 맛을 유지합니다.'
  },
  {
    id: 1,
    en_name: 'BLACKEAGLE',
    ko_name: '블랙이글',
    img: blackeagle_img,
    txt: '리저브의 모든 에스프레소 음료는 월드 바리스타 챔피언십 공식 머신인 블랙이글(Black Eagle)로 추출합니다. 블랙이글 머신과 리저브 원두가 만나 풍부한 아로마와 진하고 깊은 풍미를 가진 다채로운 리저브 에스프레소 음료들이 완성됩니다.'
  },
  {
    id: 2,
    en_name: 'POUROVER',
    ko_name: '푸어 오버',
    img: pourover_img,
    txt: '푸어 오버(Pour Over)는 가장 전통적인 커피 추출 방식의 하나로, 은은한 커피향과 부드럽고 깔끔한 풍미를 느낄 수 있습니다. 가늘게 그라인딩 한 커피를 종이 필터 위에 소복이 담고 부드럽게 원을 그리며 물을 붓습니다. 필터를 통해 떨어지는 커피 방울이 섬세한 향과 풍미를 생생하게 담아내어 부드럽고 깔끔한 한 잔의 커피를 완성합니다.푸어 오버(Pour Over)는 가장 전통적인 커피 추출 방식의 하나로, 은은한 커피향과 부드럽고 깔끔한 풍미를 느낄 수 있습니다. 가늘게 그라인딩 한 커피를 종이 필터 위에 소복이 담고 부드럽게 원을 그리며 물을 붓습니다. 필터를 통해 떨어지는 커피 방울이 섬세한 향과 풍미를 생생하게 담아내어 부드럽고 깔끔한 한 잔의 커피를 완성합니다.'
  },
  {
    id: 3,
    en_name: 'CHEMEX',
    ko_name: '케맥스',
    img: chemex_img,
    txt: '케맥스(Chemex)는 시간과 무게를 정확히 지켜 추출하는 방식으로, 완벽하게 균형 잡힌 커피와 매끄러운 바디감을 느낄 수 있습니다. 완전히 밀착된 두툼한 곡물 필터가 공기의 흐름을 막아 풍부한 향을 가득 담은 커피를 만들어 냅니다.'
  },
  {
    id: 4,
    en_name: 'COLDBREW',
    ko_name: '콜드브루',
    img: coldbrew_img,
    txt: '콜드브루(Cold Brew)는 리저브 전용 콜드브루 원두에 커피 마스터의 14시간 정성이 더해져 깊고 부드러운 풀 바디감과 달콤한 풍미를 함께 느낄 수 있습니다. 나이트로 콜드브루도 부드럽게 즐길 수 있는 리저브만의 콜드브루를 경험해 보세요.'
  },
]

const ExtractionModal = ({index, close}) => {
  const result = ExrtactionContents.filter((modal) => modal.id === index)
  console.log(result)
  return(
    <div className="extra_modal fixed">
      <div className='modal_header flex flex_jc_sb'>
        <div className='title_box'>
          <p className='en_name'>{result[0]?.en_name}</p>
          <p className='ko_name'>{result[0]?.ko_name}</p>
        </div>
        <div className='close_btn relative cursor_p' onClick={close}>
          <div className='absolute'></div>
          <div className='absolute'></div>
        </div>
      </div>
      <div className='modal_content'>
        <div className='img_box'>
          <img src={result[0].img} alt={result[0]?.ko_name} loading='lazy'/>
        </div>
        <div className='content_txt'>
          {result[0].txt}
        </div>
      </div>
    </div>
  )
}

export default ExtractionModal;