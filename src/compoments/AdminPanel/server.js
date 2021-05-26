import {data, pageRowCount} from "./constants";

export const getData = (page, rowCount = pageRowCount) => {
    return data.slice(rowCount * (page - 1), rowCount * page)
};

export const pageCount = (rowCount = pageRowCount) => {
    return Math.ceil(data.length / rowCount);
}