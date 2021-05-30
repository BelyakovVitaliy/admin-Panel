import React from "react";
import styles from './DrowDown.module.css'
const DropDown = ({title, name, values, onChange}) => {

    const onFiledInput = ({target}) => {
        onChange(name, 'value', target.value)
    };

    const valuesWithEmpty = [null, ...values];
    return (
        <div className={styles.dropDown}>
            <div className="dropDownBlock__title">{title}</div>
            <select className={styles.input} onChange={onFiledInput}>
                {valuesWithEmpty.map(value => {
                    return <option>{value}</option>
                })}
            </select>
        </div>
    )
};

export default DropDown