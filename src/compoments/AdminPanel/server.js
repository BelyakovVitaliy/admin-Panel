import {data, pageRowCount} from "./constants";
import _ from 'lodash'

export const getData = (page, filters) => {
    let result = data;
    if (filters) {
        result = filterData(result, filters)
    }
    return {count: result.length, data: result.slice(pageRowCount * (page - 1), pageRowCount * page)}
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