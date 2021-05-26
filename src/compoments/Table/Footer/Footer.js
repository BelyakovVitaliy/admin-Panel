import {FOOTER, maxPagination} from "../constants";
import Row from "../Row/Row";
import React, {Fragment} from "react";
import styles from "./Footer.module.css";
import {Lable} from "../../Lable/Lable";
import IcoButton from "../../IcoButton/IcoButton";
import pencil from "../../static/icons/pencil.svg";
import {STYLE} from "../../IcoButton/constants";
import bin from "../../static/icons/bin.svg";
import {range} from "lodash";

export const Footer = (pageCount) => {

    const pages = range(1, pageCount + 1);

    const getFooterData = () => {
        return [
            <Fragment>
                <Lable text={"Выбрано записей: 5"}/>
                <IcoButton iconSrc={pencil} title={"Изменить статус"} styleType={STYLE.SIMPLE}/>
                <IcoButton iconSrc={bin} title={"Удалить"} styleType={STYLE.ATTENTION}/>
            </Fragment>,
            <Fragment>
                <nav className={styles.pagination}>
                    { pages.length > 1 ? pages.map(page => {
                        if (page < maxPagination + 1 || page === pageCount) {
                            return <div className={styles.paginationItem}>
                                <div className={styles.paginationItemText}>{page}</div>
                            </div>
                        } else if (page === maxPagination + 1) {
                            return <div className={styles.paginationItem}>
                                <div className={styles.paginationItemText}>...</div>
                            </div>
                        } else {
                            return null
                        }
                    }): null}
                </nav>
            </Fragment>
        ]
    };


    return <Row
        type={FOOTER}
        rowData={getFooterData()}
    />
}