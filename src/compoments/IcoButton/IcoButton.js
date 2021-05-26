import React from "react";
import styles from './IcoButton.module.css'
import cc from 'classcat'

const IcoButton = ( {iconSrc, title, styleType, onClickHandler }) => {
    const style = cc({
            [styles.icoButton]: true,
            [styles[styleType]]: true,
            [styles.toggable]: !!onClickHandler,
        });
    return (
        <div className={style} onClick={onClickHandler}>
            {iconSrc ? <div className={styles.ico}><img src={iconSrc} alt={title}/></div> : null}
            <div>{title}</div>
        </div>
    )
};


export default IcoButton