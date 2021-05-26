import styles from "./Grid.module.css";
import Row from "../Row/Row";
import {DATA} from "../constants";
import React from "react";

export const Data = ({columns, data, onCheckboxClick}) => {
    return <div className={styles.data}>
            { data.map( (row, index) => {
                return <Row key={index} columns={columns} rowData={row} checkBoxHandler={onCheckboxClick} type={DATA} />
            })}
        </div>
};