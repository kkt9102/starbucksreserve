import CoffeeData from '../../Data/CoffeeExtraction.json';


const ExtractionModal = ({index, close}) => {
  // const result = ExrtactionContents.filter((modal) => modal.id === index)
  const result = CoffeeData.ExrtactionContents.filter((modal) => modal.id === index)
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