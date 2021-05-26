import React from "react";
import styles from "./Lable.module.css"


export const Lable = ({text}) => {
    return (
        <div className={styles.lable}>{text}</div>
    )
}