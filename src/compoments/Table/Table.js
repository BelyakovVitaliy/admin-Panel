import React from "react";
import {Header} from "./Header/Header";
import {Data} from "./Grid/Grid";
import {AdminPanelFooter} from "./Footer/AdminPanelFooter";
import styles from './Table.module.css'

const Table = ( {columns, data, customFooter, renderCheckBox }) => {
    return <div className={styles.table}>
            <Header
                columns={columns}
                renderCheckBox={renderCheckBox}
            />
            <Data
                columns={columns}
                data={data}
                renderCheckBox={renderCheckBox}
            />
            {customFooter ? customFooter : <AdminPanelFooter/>}
    </div>
};
export default Table;