import React from "react";
import styles from './Input.module.css'


export const Input = ({placeHolder, label, name, value, type="text", disabled, onChange}) => {

    const onChangeHandler = ({target}) => {
        onChange && onChange(name, 'value', target.value)
    };

    return (<>
            {label ? <p className={styles.label}>{label}</p> : null}
            <input type={type} className={styles.input} placeholder={placeHolder} value={value} disabled={disabled} onChange={onChangeHandler}/>
        </>
    )
};