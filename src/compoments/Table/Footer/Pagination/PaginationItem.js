import React from "react";
import styles from "./Pagination.module.css"
import cc from "classcat";


export const PaginationItem = ({page, checked, onClick}) => {

    const style = cc({
        [styles.paginationItem]: true,
        [styles.checked]: checked,
    });

    return <div className={style} onClick={() => onClick && onClick(page)}>
        <div className={styles.paginationItemText}>{page}</div>
    </div>
};


export default PaginationItem