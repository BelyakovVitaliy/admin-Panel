import React from "react";
import styles from './Input.module.css'


export const Input = ({placeHolder, onChange}) => {
    return (
        <input className={styles.input} placeholder={placeHolder} onChange={onChange}/>
    )
}