import React from "react";
import styles from './DrowDown.module.css'
const DropDownBlock = ({title, values}) => {

    const valuesWithEmpty = [null, ...values];
    return (
        <div className={styles.dropDownBlock}>
            <div className="dropDownBlock__title">{title}</div>
            <select className={styles.input}>
                {valuesWithEmpty.map(value => {
                    return <option>{value}</option>
                })}
            </select>
        </div>
    )
};

export default DropDownBlock