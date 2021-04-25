import './Cell.css'
import React from "react";


const Cell = ( { item }) => {

    const getValue = (element) => {
        return element.hasOwnProperty('name') ? element.name : element
    };

    return (
        <div className="table__cell">{ getValue(item) }</div>
    );
};

export default Cell
