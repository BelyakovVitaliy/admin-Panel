import React from "react";
import styles from './IcoButton.module.css'
import cc from 'classcat'

const IcoButton = ( {title, styleType, iconComponent, onClickHandler }) => {
    const componentStyle = cc({
            [styles.icoButton]: true,
            [styles[styleType]]: true,
            [styles.toggable]: !!onClickHandler,
        });
    const icoStyle = cc({
        [styles.ico]: true,
        [styles[styleType]]: true,
    });
    const IconComponent = iconComponent;
    return (
        <div className={componentStyle} onClick={onClickHandler}>
            {iconComponent ? <IconComponent className = {icoStyle}/> : null}
            <div>{title}</div>
        </div>
    )
};


export default IcoButton