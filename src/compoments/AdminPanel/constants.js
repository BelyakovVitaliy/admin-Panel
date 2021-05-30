import { range } from "lodash"
import {SIZE} from "../Table/Row/Cell/constants";
import {StatusFormatter} from "../Table/Row/Cell/formatters/StatusFormatter";
import React from "react";
import {DateFormatter} from "../Table/Row/Cell/formatters/DateFormatter";

export const columns = [
    { name: '#', size: SIZE.TINY},
    { name: 'Дата', formatter: DateFormatter},
    { name: 'Статус', formatter: StatusFormatter},
    { name: 'Позации'},
    { name: 'Сумма'},
    { name: 'ФИО покупателя', size: SIZE.LARGE}
];


export const STATUSES = [
    'Новый',
    'Выполнен',
    'Отменён',
    'Расчёт',
    'Отложен'
];

export const data =
    range(1, 100).map( (item) =>
        { return {
            '#': item,
            'Дата': new Date(),
            'Статус': STATUSES[Math.round(Math.random() * 4)],
            'Позации': Math.round(Math.random() * 10),
            'Сумма': Number((Math.random() * 100000).toFixed(2)),
            'ФИО покупателя': 'Иванов Иван Иванович'
        }}
    );

export const pageRowCount = 20;