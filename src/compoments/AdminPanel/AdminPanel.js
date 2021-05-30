import {useDispatch, useSelector} from 'react-redux'
import React from "react";
import IcoButton from "../IcoButton/IcoButton";
import sunIcon from '../static/icons/sun.svg'
import Table from "../Table/Table";
import {columns} from "./constants";
import styles from "./AdminPanel.module.css"
import ExtendedFilters from "../Filters/ExtendedFilters";
import refresh from "../static/icons/refresh.svg";
import filterIco from "../static/icons/filter.svg";
import {toggleFilterVisible, REDUCER_NAME, setFilters} from "../redux/actions";
import {STYLE} from "../IcoButton/constants";
import {Input} from "../Input/Input";
import {createFilter} from "./utils";
import {TEXT_TYPE} from "../Filters/constants";

const AdminPanel = () => {


    // const toggle = () => {
    //     props.showError( {
    //         header: "3343",
    //         body: "343"
    //     })
    // };

    const pageCount = useSelector((state) => state[REDUCER_NAME].pageCount);
    const data = useSelector((state) => state[REDUCER_NAME].data);
    const extendedFiltersVisible = useSelector(state => state[REDUCER_NAME].filterVisible);
    const dispatch = useDispatch();
    const toggleVisible = () => {
        dispatch(toggleFilterVisible())
    };

    const onChange = ({target}) => {
        const value = target.value;
        const filter = createFilter('value', value, TEXT_TYPE, true);
        dispatch(setFilters({
            ["ФИО покупателя"]:filter
        }))
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
                        <Input placeHolder={'Введите ФИО'} onChange={onChange}/>
                        <IcoButton title={"Фильтры"} styleType={STYLE.SIMPLE} iconSrc={filterIco} onClickHandler={toggleVisible}/>
                    </div>
                    <IcoButton title={"Загрузка"} iconSrc={refresh}/>
                </div>
                {extendedFiltersVisible && <ExtendedFilters/>}
            </div>
            <Table columns={ columns } data={data} pageCount={pageCount}/>
        </div>
    )};

export default AdminPanel