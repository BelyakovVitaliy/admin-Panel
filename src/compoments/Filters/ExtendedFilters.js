import {InputRange} from "../InputRange/InputRange";
import DropDown from "../DropDown/DrowDown";
import React, {useState} from "react";
import styles from "./ExtendedFilters.module.css";
import {STATUSES} from "../Server/constants";
import IcoButton from "../IcoButton/IcoButton";
import {useDispatch} from "react-redux";
import {setFilters} from "../redux/actions";
import {DATE_TYPE, NUMBER_TYPE, TEXT_TYPE} from "./constants";
import {createFilter} from "../AdminPanel/utils";
import _ from 'lodash'


const ExtendedFilters = () => {

    const [state, setState] = useState({filters: {}});

    const dispatch = useDispatch();

    const handleChange = (filterName, fieldName, value, filterType = TEXT_TYPE) => {
        setState({...state, filters: {...state.filters, [filterName] : _.merge(state.filters[filterName], createFilter(fieldName, value, filterType))}});
    };

    const applyFilters = () => {
        dispatch(setFilters(state.filters))
    };

    return <div className={styles.extendedFilterBlock}>
        <div className={styles.filterElement}>
            <InputRange
                title={"Дата заказа"}
                type={DATE_TYPE}
                name={"orderDate"}
                onChange={handleChange}
            />
        </div>
        <div className={styles.filterElement}>
            <DropDown title={"Статус заказа"} name={"status"} values={STATUSES} onChange={handleChange}/>
        </div>
        <div className={styles.filterElement}>
        <InputRange
                title={"Сумма заказа"}
                type={NUMBER_TYPE}
                name={"sum"}
                onChange={handleChange}
            />
        </div>
        <div className={styles.filterElement}>
            <IcoButton title={"Применить"} onClickHandler={applyFilters}/>
        </div>
        </div>
};

export default ExtendedFilters;