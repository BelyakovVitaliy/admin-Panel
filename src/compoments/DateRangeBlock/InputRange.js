import React from "react";
import styles from './DateRange.module.css';


export const InputRange = ({ title, type= "text", begin, end }) => {

    return (
        <div className={styles.InputRangeBlock}>
            <div className="InputRangeBlock__title">{title}</div>
            <div className={styles.inputs}>
                <input type={type} value={begin} className={styles.inputFrom}/>
                <input type={type} value={end} className={styles.inputTo}/>
            </div>
        </div>
    )
};