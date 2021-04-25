import './Row.css'
import React from "react";
import Cell from "./Cell/Cell";


const Row = ( {columns , rowData, header, addCheckBox }) => {

    const appendCheckbox = () => {
        return addCheckBox ? <Cell item={<input type="checkbox"/>}/> : null
    };

    return (
        header ?
            <div className="table__row table__row_header">
                {appendCheckbox(addCheckBox)}
                {columns.map( column => {return <Cell item = { column }/>})}
            </div> :
             <div className="table__row table__row_data">
                {appendCheckbox(addCheckBox)}
                {columns.map(column => {
                    return <Cell item={rowData[column.name]}/>
                })}
            </div>
    )
};

export default Row