import React from "react";
import styles from "./Footer.module.css";
import {Lable} from "../../Lable/Lable";
import IcoButton from "../../IcoButton/IcoButton";
import pencil from "../../static/icons/pencil.svg";
import {STYLE} from "../../IcoButton/constants";
import bin from "../../static/icons/bin.svg";
import {Pagination} from "./Pagination/Pagination";
import {useSelector} from "react-redux";
import {REDUCER_NAME} from "../../NotificationBox/constants";

export const Footer = ({pageCount}) => {

    const checkedRowsCount = useSelector((state) => state[REDUCER_NAME].checked);

    return <div className={styles.footer}>
        <div className={styles.buttons}>
            <Lable text={"Выбрано записей: " + checkedRowsCount}/>
            <IcoButton iconSrc={pencil} title={"Изменить статус"} styleType={STYLE.SIMPLE}/>
            <IcoButton iconSrc={bin} title={"Удалить"} styleType={STYLE.ATTENTION}/>
        </div>
        <Pagination pagesCount={pageCount}/>
    </div>
};