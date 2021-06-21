import React from "react";
import styles from './DrowDown.module.css'
const DropDown = ({title, name, value, values, disabled = false, onChange}) => {

    const onChangeHandler = ({target}) => {
        onChange(name, 'value', target.value)
    };

    const valuesWithEmpty = [null, ...values];
    return (
        <div className={styles.dropDown}>
            <div className={styles.title}>{title}</div>
            <select className={styles.input} value={value} disabled={disabled} onChange={onChangeHandler}>
                {valuesWithEmpty.map(value => {
                    return <option>{value}</option>
                })}
            </select>
        </div>
    )
};

export default DropDown