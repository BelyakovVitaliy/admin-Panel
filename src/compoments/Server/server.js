import {data, pageRowCount} from "./constants";
import _ from 'lodash'
import {DESC_ORDER} from "../Table/Row/constants";

export const getData = (page, filters, sortColumn) => {
    let result = data;
    if (filters) {
        result = filterData(result, filters)
    }
    if (!_.isEmpty(sortColumn)) {
        result = sortData(result, sortColumn)
    }
    return {count: result.length, data: result.slice(pageRowCount * (page - 1), pageRowCount * page)}
};

const sortData  = (data, sortColumn) => {
    const orderDirection = sortColumn.direction === DESC_ORDER ? 1 : -1;
    data.sort((orderLeft, orderRight) => {
        if (orderLeft[sortColumn.name] > orderRight[sortColumn.name]) {
            return orderDirection
        }
        if (orderLeft[sortColumn.name] < orderRight[sortColumn.name]) {
            return -1 * orderDirection
        }
        return 0
    });
    return data;
};


const filterData = (data, filters) => {
    let result = data;
    _.filter(filters, (filter, fieldName) => {
        if (filter.hasOwnProperty("from")  && filter.from) {
            result = result.filter(it => it[fieldName] >= filter.from)
        }
        if (filter.hasOwnProperty("to")  && filter.to) {
            result = result.filter(it => it[fieldName] <= filter.to)
        }
        if (filter.hasOwnProperty("value") && filter.value) {
            if (filter.contains) {
                result = result.filter(it => it[fieldName].includes(filter.value))
            } else {
                result = result.filter(it => it[fieldName] === filter.value)
            }
        }
    });
    return result;
}