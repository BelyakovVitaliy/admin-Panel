import IcoButton from "../IcoButton/IcoButton";
import React from "react";
import './ButtonInput.css'

const ButtonInput = ({ data, inputTitle, buttonText, buttonIco }) => {
    return (
        <div className="buttonInput">
            <input className="inputbox inputbox_orderNumOrFIO" title={inputTitle} value={data}/>
            <IcoButton title={buttonText} iconSrc={buttonIco}/>
        </div>
    )
};

export default ButtonInput