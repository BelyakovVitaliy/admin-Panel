import React from "react";
import './DateRangeBlock.css';


export const DateRangeBlock = (props) => {

    const { title, dateBegin, dateEnd } = props;

    return (
        <div className="DateRangeBlock">
            <div className="DateRangeBlock__title">{title}</div>
            <div className="DateRangeBlock__inputs">
                <input type="date" value={dateBegin} className="DateRangeBlock__inputFrom"/>
                <input type="date" value={dateEnd} className="DateRangeBlock__inputTo"/>
            </div>
        </div>
    )
};