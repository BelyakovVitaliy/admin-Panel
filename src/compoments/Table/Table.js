import './Table.css'
import React from "react";
import Row from "./Row/Row";


const Table = ({ columns, data, addCheckBox }) => {

    return (
        <div className="table">
            <div className="table__header">
                <Row columns={columns} addCheckBox={addCheckBox} header/>
            </div>
            <div className="table__data">
                { data.map( row => {
                    return <Row columns={columns} rowData={row} addCheckBox={addCheckBox} />
                })}
            </div>
        </div>
    );
};

export default Table;