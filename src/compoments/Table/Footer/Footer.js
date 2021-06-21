import React from "react";
import styles from "./Footer.module.css";

export const Footer = ({children}) => {

    return <div className={styles.footer}>
        {children}
    </div>
};