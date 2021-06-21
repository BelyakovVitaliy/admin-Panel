import styles from './Cell.module.css'
import React from "react";
import cc from "classcat"
import {SIZE} from "./constants";
import {HEADER, DATA} from "../../constants";


const defineFormatter = (column, type) => (type === DATA && column.formatter) || (({ value }) => value);

const Cell = ( { item, column = {}, type, onClick }) => {

    const Formatter = defineFormatter(column, type);

    const style = cc({
        [styles.cell]: true,
        [styles.tiny]: column.size === SIZE.TINY,
        [styles.large]: column.size === SIZE.LARGE,
        [styles.small]: column.size === SIZE.SMALL,
        [styles.header]: type === HEADER
    });

    const onClickHandler = (event) => {
        event.preventDefault();
        onClick && onClick(column);
    };
    return <div className={style} onClick={onClickHandler}>
        {item ? <Formatter value={item}/> : "-"}
    </div>
};

export default Cell
