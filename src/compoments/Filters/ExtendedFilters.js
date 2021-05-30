import {InputRange} from "../InputRange/InputRange";
import DropDown from "../DropDown/DrowDown";
import React, {useState} from "react";
import styles from "./ExtendedFilters.module.css";
import {STATUSES} from "../AdminPanel/constants";
import IcoButton from "../IcoButton/IcoButton";
import {useDispatch} from "react-redux";
import {setFilters} from "../redux/actions";
import {DATE_TYPE, NUMBER_TYPE, TEXT_TYPE} from "./constants";
import {createFilter} from "../AdminPanel/utils";

const ExtendedFilters = () => {

    const [state, setState] = useState({filters: {}});

    const dispatch = useDispatch();

    const handleChange = (filterName, fieldName, value, filterType = TEXT_TYPE) => {
        setState({...state, filters: {...state.filters, [filterName] : createFilter(fieldName, value, filterType)}});
    };

    const applyFilters = () => {
        dispatch(setFilters(state.filters))
    };

    return <div className={styles.extendedFilterBlock}>
            <InputRange
                title={"Дата заказа"}
                type={DATE_TYPE}
                name={"Дата"}
                onChange={handleChange}
            />
            <DropDown title={"Статус заказа"} name={"Статус"} values={STATUSES} onChange={handleChange}/>
            <InputRange
                title={"Сумма заказа"}
                type={NUMBER_TYPE}
                name={"Сумма"}
                onChange={handleChange}
            />
            <IcoButton title={"Применить"} onClickHandler={applyFilters}/>
        </div>
};

export default ExtendedFilters;