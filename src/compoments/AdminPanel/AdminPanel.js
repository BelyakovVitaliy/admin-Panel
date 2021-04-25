import { connect } from 'react-redux'
import { showNotification } from '../NotificationBox/action'
import React from "react";
import {DateRangeBlock} from "../DateRangeBlock/DateRangeBlock";
import IcoButton from "../IcoButton/IcoButton";
import sunIcon from '../../../public/icons/sun.svg'
import refresh from '../../../public/icons/refresh.svg'
import filterIcon from '../../../public/icons/filter.svg'
import ButtonInput from "../ButtonInput/ButtonInput";
import './AdminPanel.css'
import DropDownBlock from "../DropDownBlock/DrowDownBlock";
import Table from "../Table/Table";

const AdminPanel = (props) => {

    const filters = {
        orderDate: {
            dateBegin: null, dateEnd: null
        },
        orderCost: {
            costFrom: null, costEnd: null
        }
    };

    const columns = [
        { name: '#'},
        { name: 'Дата'},
        { name: 'Статус'},
        { name: 'Позации'},
        { name: 'Сумма'},
        { name: 'ФИО покупателя'}
    ];

    const data = [
        {
            '#': 'll',
            'Дата': '01.01.2020',
            'Статус': 'В работе',
            'Позации': '2',
            'Сумма': '2000',
            'ФИО покупателя': 'Иванов Иван Иванович'
        },
        {
            '#': 'll',
            'Дата': '02.01.2020',
            'Статус': 'Выполнен',
            'Позации': '2',
            'Сумма': '4000',
            'ФИО покупателя': 'Петров Петр Петрович'
        }
    ];


    return (
        <div className="panel">
            <div className="panel__header">
                <div className="panel__title">Список заказов</div>
                <IcoButton iconSrc={sunIcon} title={"Сменить тему"}/>
            </div>
            <div className="panel__filters">
                <div className="panel__fastFilterBlock">
                    <ButtonInput buttonText={"Фильтры"} inputTitle={"Введите ФИО"} buttonIco={filterIcon}/>
                    <IcoButton title={"Загрузка"} iconSrc={refresh}/>
                </div>
                <div className="panel__extendedFilterBlock">
                    <DateRangeBlock
                        title={"Дата заказа"}
                        dateBegin={filters.orderDate.dateBegin}
                        dateEnd={filters.orderDate.dateEnd}
                    />
                    <DropDownBlock title={"Статус заказа"}/>
                    <DateRangeBlock
                        title={"Сумма заказа"}
                        dateBegin={filters.orderCost.costFrom}
                        dateEnd={filters.orderCost.costEnd}
                    />
                    <div className="lable">Применить</div>
                </div>
            </div>
            <Table columns={ columns } data={ data } addCheckBox/>
        </div>
    )};


    const mapDispatchToProps = (dispatch) => ({
        dispatch,
        show: (message) => dispatch(showNotification(message))
    });

export default connect(null, mapDispatchToProps)(AdminPanel)