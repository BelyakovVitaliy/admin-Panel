import React from "react";
import './DrowDownBlock.css'
const DropDownBlock = ({title}) => {
    return (
        <div className="dropDownBlock">
            <div className="dropDownBlock__title">{title}</div>
            <select className="dropDownBlock__input">12</select>
        </div>
    )
};

export default DropDownBlock