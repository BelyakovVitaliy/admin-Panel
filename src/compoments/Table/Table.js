import React, {Fragment} from "react";
import {Header} from "./Header/Header";
import {Data} from "./Grid/Grid";
import {Footer} from "./Footer/Footer";
import styles from './Table.module.css'

const Table = ( {columns, data, pageCount }) => {
    const checkBoxHandler = props => {};
    return <div className={styles.table}>
            <Header
                columns={columns}
                onCheckboxClick={checkBoxHandler}
            />
            <Data
                columns={columns}
                data={data}
                onCheckboxClick={checkBoxHandler}
            />
            <Footer pageCount={pageCount}/>
    </div>
};
export default Table;