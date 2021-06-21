import styles from "./ConfirmDialog.module.css";
import IcoButton from "../IcoButton/IcoButton";
import {STYLE} from "../IcoButton/constants";
import React from "react";
import cc from "classcat";


export const ConfirmDialog = ({header, yesText, noText, yesIco, noIco, yesHandler, noHandler, left, bottom}) => {


    const confirmationDialogStyle = cc({
        [styles.confirmDialog]: true,
    });
    return (
        <div className={confirmationDialogStyle}>
            <div className={styles.header}>
                <p className={styles.headerText}>{header}</p>
            </div>
            <div className={styles.buttons}>
                <div className={styles.buttonLight}>
                    <IcoButton onClickHandler={yesHandler} iconComponent={yesIco} title={yesText}/>
                </div>
                <div className={styles.buttonDark}>
                    <IcoButton styleType={STYLE.SIMPLE} iconComponent={noIco} onClickHandler={noHandler} title={noText}/>
                </div>
            </div>
        </div>
    );

}
