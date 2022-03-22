import React from 'react';

import * as ExtrantionList from './extraction';

import '../resources/css/common.css';
import '../resources/css/style.css'; 

const Modal = (props) => {

    const { open, close, title} = props;

    return(
        <div className={`${open ? 'openModal extra_popup' : 'extra_popup'} fixed`}>
            <div className='popup_header flex'>
                {title}
                <div className='close_btn relative' onClick={close}>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className='popup_body flex flex_dir_c'>
                <div className='img_box'>
                    <img src='' alt=''></img>
                </div>
                <div className='extra_txt'>
                    이건 어쩌나
                    {ExtrantionList.Pop().props.children[0]}
                </div>
            </div>
        </div>
    )
}

export default Modal;