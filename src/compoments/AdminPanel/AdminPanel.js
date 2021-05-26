import {connect, useDispatch, useSelector} from 'react-redux'
import { showNotification } from '../NotificationBox/action'
import React, {useState} from "react";
import IcoButton from "../IcoButton/IcoButton";
import sunIcon from '../static/icons/sun.svg'
import Table from "../Table/Table";
import {columns, data} from "./constants";
import styles from "./AdminPanel.module.css"
import {getData, pageCount} from "./server";
import ExtendedFilters from "../Filters/ExtendedFilters";
import refresh from "../static/icons/refresh.svg";
import filterIco from "../static/icons/filter.svg";
import {toggleFilterVisible} from "../Filters/action";
import {FILTER_REDUCER_NAME} from "../Filters/reducer";
import {STYLE} from "../IcoButton/constants";
import {Input} from "../Input/Input";

const AdminPanel = (props) => {


    // const toggle = () => {
    //     props.showError( {
    //         header: "3343",
    //         body: "343"
    //     })
    // };

    const [page, setPage] = useState(1);

    const extendedFiltersVisible = useSelector(state => state[FILTER_REDUCER_NAME].filterVisible);
    const dispatch = useDispatch();
    const toggleVisible = () => {
        dispatch(toggleFilterVisible())
    };


    return (
        <div className={styles.panel}>
            <div className={styles.header}>
                <div className={styles.title}>Список заказов</div>
                <IcoButton iconSrc={sunIcon} title={"Сменить тему"}/>
            </div>
            <div className={styles.filters}>
                <div className={styles.fastFilterBlock}>
                    <div className={styles.buttonInput}>
                        <Input placeHolder={'Введите ФИО'}/>
                        <IcoButton title={"Фильтры"} styleType={STYLE.SIMPLE} iconSrc={filterIco} onClickHandler={toggleVisible}/>
                    </div>
                    <IcoButton title={"Загрузка"} iconSrc={refresh}/>
                </div>
                {extendedFiltersVisible && <ExtendedFilters/>}
            </div>
            <Table columns={ columns } data={ getData(page) } pageCount={pageCount()}/>
        </div>
    )};

export default AdminPanel