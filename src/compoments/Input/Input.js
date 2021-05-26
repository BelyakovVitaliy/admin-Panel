import React from "react";
import styles from './Input.module.css'


export const Input = ({placeHolder}) => {
    return (
        <input className={styles.input} placeholder={placeHolder}/>
    )
}