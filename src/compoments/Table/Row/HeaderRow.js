import styles from './Row.module.css'
import React, {useState} from "react";
import Cell from "./Cell/Cell";
import {HEADER} from "../constants";
import {CheckBoxCell} from "./Cell/CheckBoxCell";
import {useDispatch, useSelector} from "react-redux";
import {orderItem, REDUCER_NAME, toggleHeaderChecked} from "../../redux/actions";
import cc from "classcat";
import {ASC_ORDER, DESC_ORDER} from "./constants";


const HeaderRow = ( { columns, renderCheckBox }) => {

    const dispatch = useDispatch();

    const allChecked = useSelector((state) => state[REDUCER_NAME].allChecked);
    const [orderColumn, setOrderColumn] = useState([]);

    const onHeaderCheckboxClick = () => {
        dispatch(toggleHeaderChecked())
    };

    const onClickHandler = (column) => {
        let newOrderColumn = {...orderColumn};
        if (newOrderColumn.name === column.name) {
            if (orderColumn.direction === ASC_ORDER) {
                newOrderColumn = {};
            } else {
                newOrderColumn.direction = orderColumn.direction = ASC_ORDER;
            }
        } else {
            newOrderColumn.name = column.name;
            newOrderColumn.direction = DESC_ORDER
        }
        setOrderColumn(newOrderColumn);
        dispatch(orderItem(newOrderColumn))
    };

    const getColumnItem = (column) => {
        const { name, title } = column;
        const style = cc({
            [styles.headerSortDown]: orderColumn.name === name && orderColumn.direction === DESC_ORDER,
            [styles.headerSortUp]: orderColumn.name === name && orderColumn.direction === ASC_ORDER
        });
        return  <>
                    {title}
                    <div
                        className={style}
                    />
                </>
    };

    return <div className={styles.header}>
        {renderCheckBox && <CheckBoxCell checked={allChecked} onClick={onHeaderCheckboxClick}/>}
        {columns.map( (column, index) => {return <Cell key={index} item = { getColumnItem(column) } column={column} type={HEADER} onClick={() => onClickHandler(column)}/>})}
    </div>;

};

export default HeaderRow