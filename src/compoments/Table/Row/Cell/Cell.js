import styles from './Cell.module.css'
import React from "react";
import cc from "classcat"
import {SIZE} from "./constants";
import {HEADER} from "../../constants";


const defineFormatter = (column) => column.formatter || (({ value }) => value);

const Cell = ( { item, column = {}, type }) => {

    const Formatter = defineFormatter(column);

    const style = cc({
        [styles.cell]: true,
        [styles.tiny]: column.size === SIZE.TINY,
        [styles.large]: column.size === SIZE.LARGE,
        [styles.small]: column.size === SIZE.SMALL,
        [styles.header]: type === HEADER
    });
    return <div className={style}>
        <Formatter value={item}/>
    </div>
};

export default Cell
