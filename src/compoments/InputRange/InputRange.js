import React from "react";
import styles from './InputRange.module.css';
import {DATE_TYPE, NUMBER_TYPE, TEXT_TYPE} from "../Filters/constants";


export const InputRange = ({ title, type= TEXT_TYPE, name, onChange }) => {

    const onFiledInput = (fieldName) => ({target}) => {
        let value = target.value;
        switch (type) {
            case DATE_TYPE: {
                value = new Date(value);
                break;
            }
            case NUMBER_TYPE: value = Number(value)
        }
        onChange(name, fieldName, value , type )
    };


    return (
        <div className={styles.InputRangeBlock}>
            <div className="InputRangeBlock__title">{title}</div>
            <div className={styles.inputs}>
                <input type={type} onChange={onFiledInput("from")} className={styles.inputFrom}/>
                <input type={type} onChange={onFiledInput("to")} className={styles.inputTo}/>
            </div>
        </div>
    )
};