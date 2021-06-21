import styles from './Row.module.css'
import React from "react";
import Cell from "./Cell/Cell";
import {DATA} from "../constants";
import {CheckBoxCell} from "./Cell/CheckBoxCell";
import {useDispatch, useSelector} from "react-redux";
import {REDUCER_NAME, toggleRowChecked} from "../../redux/actions";
import {idAlias} from "../../redux/reducers";


const Row = ( { columns , rowData, renderCheckBox }) => {

    const dispatch = useDispatch();

    const onRowCheckboxClick = (row) => {
        dispatch(toggleRowChecked(row))
    };

    const checkedRows = useSelector((state) => state[REDUCER_NAME].checkedRows);

    return <div className={styles.data}>
        {renderCheckBox &&<CheckBoxCell id={rowData} checked={checkedRows.map(it=>it[idAlias]).includes(rowData[idAlias])} onClick={onRowCheckboxClick}/>}
        {columns.map((column, index) => {
            return <Cell key={index} item={rowData[column.name]} column={column} type={DATA}/>
        })}
    </div>;

};

export default Row