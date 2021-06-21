import Cell from "./Cell";
import {SIZE} from "./constants";
import React from "react";
import styles from './Cell.module.css'


export const CheckBoxCell = ({id, checked, onClick}) => {
    return  <Cell item={<input className={styles.checkbox} id={id} checked={checked ? "checked": null} type="checkbox" onChange={() => onClick(id)}/>} column={{size: SIZE.TINY}}/>
}