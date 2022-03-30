import React from 'react';

import $ from 'jquery';

import ExtrantionList from './extraction';

import '../resources/css/common.css';
import '../resources/css/style.css'; 

$('.close_btn').click(function(){
    $('.extra_popup').removeClass('.openModal');
})

const Modal = (popups) => {    
    
    const { open, close } = popups;
    
    
    return(
        <ol className={`${open ? 'openModal extra_popup' : 'extra_popup'} fixed`} id={popups.PopId}>
            <div className='popup_header flex flex_wrap_wrap'>
                <div className='popup_e_name'>{popups.title}</div>
                <div className='popup_k_name'>{popups.KoTitle}</div>
                <div className='close_btn relative' onClick={close}>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className='popup_body flex flex_dir_c'>
                <div className='img_box'>
                    <img src={`${popups.photo}`} alt=''></img>
                </div>
                <div className='extra_txt'>
                    {popups.txt}
                </div>
            </div>
        </ol>
    )
}


Modal.defaultProps = {
    title: 'NotFound',
    KoTitle: '이름을 불러오는데 실패했습니다.',
    photo: ' 이미지경로를 찾을 수 없습니다.',
    txt: '내용을 불러오는데 실패했습니다.',
  }

export default Modal;