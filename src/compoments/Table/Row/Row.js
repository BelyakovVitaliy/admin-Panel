import styles from './Row.module.css'
import React from "react";
import Cell from "./Cell/Cell";
import {DATA, HEADER} from "../constants";
import {CheckBoxCell} from "./Cell/CheckBoxCell";
import {useDispatch, useSelector} from "react-redux";
import {REDUCER_NAME, toggleHeaderChecked, toggleRowChecked} from "../../redux/actions";


const Row = ( { columns , rowData, header, checkBoxHandler, type }) => {


    const dispatch = useDispatch();

    const allChecked = useSelector((state) => state[REDUCER_NAME].allChecked)
    const onHeaderCheckboxClick = () => {
        dispatch(toggleHeaderChecked())
    };


    const onRowCheckboxClick = (rowId) => {
        dispatch(toggleRowChecked(rowId))
    };

    const checkedRows = useSelector((state) => state[REDUCER_NAME].checked);

    const render = (columns , rowData, header, checkBoxHandler, type) => {
        switch (type) {
            case HEADER:
                return <div className={styles.header}>
                    <CheckBoxCell checked={allChecked} onClick={onHeaderCheckboxClick}/>
                    {columns.map( (column, index) => {return <Cell key={index} item = { column.name } column={column} type={type}/>})}
                </div>;
            case DATA:
                return <div className={styles.data}>
                    <CheckBoxCell id={rowData['#']} checked={checkedRows.includes(rowData['#'])} onClick={onRowCheckboxClick}/>
                    {columns.map((column, index) => {
                        return <Cell key={index} item={rowData[column.name]} column={column} type={type}/>
                    })}
                </div>;
            default: return  null;
        }
    };

    return (render(columns , rowData, header, checkBoxHandler, type));

};

export default Row