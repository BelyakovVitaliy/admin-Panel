import {InputRange} from "../DateRangeBlock/InputRange";
import DropDownBlock from "../DropDownBlock/DrowDown";
import {Lable} from "../Lable/Lable";
import React from "react";
import styles from "./ExtendedFilters.module.css";
import {STATUSES} from "../AdminPanel/constants";
import IcoButton from "../IcoButton/IcoButton";

const extendedFilters = {
    orderDate: {
        dateBegin: null, dateEnd: null
    },
    orderCost: {
        costFrom: null, costEnd: null
    }
};


const ExtendedFilters = () => {
    return <div className={styles.extendedFilterBlock}>
            <InputRange
                title={"Дата заказа"}
                type={"date"}
                begin={extendedFilters.orderDate.dateBegin}
                end={extendedFilters.orderDate.dateEnd}
            />
            <DropDownBlock title={"Статус заказа"} values={STATUSES}/>
            <InputRange
                title={"Сумма заказа"}
                begin={extendedFilters.orderCost.costFrom}
                end={extendedFilters.orderCost.costEnd}
            />
            <IcoButton title={"Применить"}/>
        </div>
};

export default ExtendedFilters;