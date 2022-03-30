import React from "react";
import { useNavigate } from "react-router-dom";
import { ImArrowLeft2 } from 'react-icons/im';

const HistoryBack = () => {
    const PageWidth = document.documentElement.scrollWidth;
    const History = () => useNavigate;
    const goBack = () => {
        window.history.back();
    }

    return (
        <>
            { PageWidth > 768 ? '' : <div className="history_back absolute" onClick={goBack}><ImArrowLeft2/></div>}
        </>
    )
}

export default HistoryBack;