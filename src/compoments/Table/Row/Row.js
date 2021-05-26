import styles from './Row.module.css'
import React from "react";
import Cell from "./Cell/Cell";
import {DATA, FOOTER, HEADER} from "../constants";
import {CheckBoxCell} from "./Cell/CheckBoxCell";


const Row = ( { columns , rowData, header, checkBoxHandler, type }) => {

    const render = (columns , rowData, header, checkBoxHandler, type) => {
        switch (type) {
            case HEADER:
                return <div className={styles.header}>
                    <CheckBoxCell/>
                    {columns.map( (column, index) => {return <Cell key={index} item = { column.name } column={column} type={type}/>})}
                </div>;
            case DATA:
                return <div className={styles.data}>
                    <CheckBoxCell/>
                    {columns.map((column, index) => {
                        return <Cell key={index} item={rowData[column.name]} column={column} type={type}/>
                    })}
                </div>;
            case FOOTER:
                return <div className={styles.footer}>
                    {rowData.map( (fd, index) => {
                        return <Cell key={index} item={fd} type={type}/>
                    })}
                </div>;
            default: return  null;
        }
    };

    return (render(columns , rowData, header, checkBoxHandler, type));

};

export default Row