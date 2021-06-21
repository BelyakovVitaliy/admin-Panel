import { range } from "lodash"
import {SIZE} from "../Table/Row/Cell/constants";
import {StatusFormatter} from "../Table/Row/Cell/formatters/StatusFormatter";
import React from "react";
import {DateFormatter} from "../Table/Row/Cell/formatters/DateFormatter";
import {CurrencyFormatter} from "../Table/Row/Cell/formatters/CurrencyFormatter";

export const columns = [
    { title: '#', name: 'id', size: SIZE.TINY},
    { title: 'Дата', name: 'orderDate', formatter: DateFormatter},
    { title: 'Статус', name: 'status', formatter: StatusFormatter},
    { title: 'Позиции', name: 'amount', size: SIZE.SMALL},
    { title: 'Сумма', name: 'sum', formatter: CurrencyFormatter},
    { title: 'ФИО покупателя', name: 'fio', size: SIZE.LARGE}
];

export const detailedColumns = [
    { title: 'Артикул', name: 'articul'},
    { title: 'Наименование', name: 'title', size: SIZE.LARGE},
    { title: 'Цена', name: 'cost', formatter: CurrencyFormatter},
];

const detailedInfo = [
    {
        articul:"242424",
        title: "Джинсы",
        cost: "5000"
    },
    {
        articul:"222",
        title: "Ремень",
        cost: "1000"
    }
]


export const STATUSES = [
    'Новый',
    'Выполнен',
    'Отменён',
    'Расчёт',
    'Отложен'
];

export const LOYALTY = [
    'Новичок',
    'Любитель',
    'Профессионал'
];

const names = [
    'Иван',
    'Сергей',
    'Петр',
    'Сергей',
    'Матвей',
    'Алексей',
]

const secondNames = [
    'Петров',
    'Иванов',
    'Желобков',
    'Филин',
    'Анисимов',

]

const serNames = [
    'Алексеевич',
    'Сергеевич',
    'Владимирович',
    'Анатольевич',
    'Юрьевич',
]

export const data =
    range(1, 300).map( (item) =>
        { return {
            'id': Math.ceil(Math.random() * 10000),
            'orderDate': new Date(Math.round(Math.random() * 21 + 2000), Math.round(Math.random() * 11), Math.round(Math.random() * 30)),
            'status': STATUSES[Math.round(Math.random() * 4)],
            'amount': Math.round(Math.random() * 10),
            'sum': Number((Math.random() * 100000).toFixed(2)),
            'loyalty': LOYALTY[Math.round(Math.random() * 2)],
            'fio': secondNames[Math.round(Math.random() * (secondNames.length - 1))] + " " + names[Math.round(Math.random() * (names.length - 1))] + " " + serNames[Math.round(Math.random() * (serNames.length - 1))],
            'detailedInfo': detailedInfo,
            'confirmKey': ''
        }}
    );

export const pageRowCount = 20;