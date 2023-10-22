import { useNavigate } from "react-router-dom";

import { ReactComponent as  Back } from '../../Assets/SVG/BackIcon.svg';

const SubHeader = ({ko_name,en_name}) => {
  const navigate = useNavigate();
  return(
    <div className="sub_header">
      <div className="history_back absolute cursor_p" onClick={() => navigate(-1)}>
        <Back/>
      </div>
      <div className="cont flex flex_dir_c flex_jc_c flex_ai_c">
        <div className="ko_name">{ko_name}</div>
        <div className="en_name">{en_name}</div>
      </div>
    </div>
  )
}

export default SubHeader;