import React from 'react';

import ExtrantionList from './extraction';

import '../resources/css/common.css';
import '../resources/css/style.css'; 

const Modal = (props) => {    

    const { open, close } = props;

    return(
        <div className={`${open ? 'openModal extra_popup' : 'extra_popup'} fixed`}>
            <div className='popup_header flex flex_wrap_wrap'>
                <div className='popup_e_name'>{props.title}</div>
                <div className='popup_k_name'>{props.KoTitle}</div>
                <div className='close_btn relative' onClick={close}>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className='popup_body flex flex_dir_c'>
                <div className='img_box'>
                    <img src={`${props.photo}`} alt=''></img>
                </div>
                <div className='extra_txt'>
                    {props.txt}
                </div>
            </div>
        </div>
    )
}


Modal.defaultProps = {
    title: 'NotFound',
    KoTitle: '이름을 불러오는데 실패했습니다.',
    photo: ' 이미지경로를 찾을 수 없습니다.',
    txt: '내용을 불러오는데 실패했습니다.'
    
  }

export default Modal;