import {
    ACTIVE_PAGE,
    FILTER_VISIBLE,
    APPLY_FILTERS,
    HEADER_CHECKED,
    ROW_CHECKED,
    REMOVE_ITEM, UPDATE_ITEM, ORDER_ITEM, CHANGE_THEME
} from "./actions";
import {getData} from "../Server/server";
import {pageRowCount} from "../Server/constants";
import _ from 'lodash'
import {LIGHT_THEME} from "../AdminPanel/constants";




const calcPageCount = (dataLength) => {
    return Math.ceil(dataLength / pageRowCount)
};

const initialState = () => {
    const data = getData(1);
    return {
        filterVisible: false,
        data: data.data,
        activePage: 1,
        pageCount: calcPageCount(data.count),
        filters: {},
        sortColumn: {},
        checkedRows: [],
        allChecked: false,
        theme: LIGHT_THEME
    }
};

export const idAlias = 'id';


export const adminPanelReducer = (state = initialState(), action) => {
    switch (action.type) {
        case FILTER_VISIBLE:
            return {...state, filterVisible: !state.filterVisible};
        case ACTIVE_PAGE:
            return {...state, data: getData(action.payload, state.filters, state.sort).data, activePage: action.payload};
        case APPLY_FILTERS: {
            const filters = _.merge(state.filters, action.payload);
            const data = getData(1, filters, state.sort);
            return {...state, data: data.data, activePage: 1, filters: filters, pageCount: calcPageCount(data.count)};
        }
        case HEADER_CHECKED: {
            if (state.allChecked) {
                return {...state, checkedRows: [], allChecked: false}
            } else {
                return {...state , checkedRows: state.data, allChecked: true}
            }
        }
        case ROW_CHECKED: {
            const exIndex = state.checkedRows.findIndex(it=>it[idAlias] === action.payload[idAlias]);
            if (exIndex !== -1) {
                state.checkedRows.splice(exIndex, 1);
                return {...state, checkedRows: [...state.checkedRows]}
            } else {
                return {...state, checkedRows: [...state.checkedRows, action.payload], allChecked: false}
            }
        }
        case REMOVE_ITEM: {
            for (let row of action.payload) {
                state.data.splice(state.data.findIndex( it => it[idAlias] === row[idAlias]), 1)
            }
            return {...state, data: [...state.data], checkedRows: []}
        }
        case UPDATE_ITEM: {
            const newEntity = action.payload;
            const item = state.data.find(item => item.id === newEntity.id);
            _.merge(item, newEntity);
            return {...state, data: [...state.data], checkedRows: []}
        }
        case ORDER_ITEM: {
            const data = getData(1, state.filters, action.payload);
            return {...state, data: data.data, sortColumn: action.payload};
        }
        case CHANGE_THEME: {
            return {...state, theme: action.payload}
        }
        default: return state;
    }
};
