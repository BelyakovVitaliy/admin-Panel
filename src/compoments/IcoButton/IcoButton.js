import React from "react";
import './IcoButton.css'

const IcoButton = ( {iconSrc, title }) => {
    return (
        <div className="icoButton ico-button_switchTheme">
            <div className="icoButton__ico"><img src={iconSrc} alt={"1"}/></div>
            <div className="icoButton__button">{title}</div>
        </div>
    )
};


export default IcoButton