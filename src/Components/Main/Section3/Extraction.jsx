import section_tit from '../../../Assets/Images/section_3_tit.png';
import ExtractionCard from '../../ExtractionCard/ExtractionCard';

const Extraction = () => {
  return(
    <div className="section_view re_sc_2 relative">
      <div className="page_title">
        <div className="img_box">
          <img src={section_tit} alt="" />
        </div>
      </div>
      <div className='extra_card'>
        <ExtractionCard/>
      </div>
    </div>
  )
}

export default Extraction;