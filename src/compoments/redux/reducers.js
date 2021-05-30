import {ACTIVE_PAGE, FILTER_VISIBLE, APPLY_FILTERS, GET_DATA, HEADER_CHECKED, ROW_CHECKED} from "./actions";
import {getData} from "../AdminPanel/server";
import {pageRowCount} from "../AdminPanel/constants";
import _ from 'lodash'




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
        checked: [],
        allChecked: false
    }
};


export const adminPanelReducer = (state = initialState(), action) => {
    switch (action.type) {
        case FILTER_VISIBLE:
            return {...state, filterVisible: !state.filterVisible};
        case ACTIVE_PAGE:
            return {...state, data: getData(action.payload, state.filters).data, activePage: action.payload};
        case APPLY_FILTERS: {
            const filters = _.merge(state.filters, action.payload);
            const data = getData(1, filters);
            return {...state, data: data.data, activePage: 1, filters: filters, pageCount: calcPageCount(data.count)};
        }
        case HEADER_CHECKED: {
            if (state.allChecked) {
                return {...state, checked: [], allChecked: false}
            } else {
                return {...state, checked: state.data.map(it=> it.id), allChecked: true}
            }
        }
        case ROW_CHECKED: {
            const exIndex = state.checked.indexOf(action.payload);
            if (exIndex !== -1) {
                state.checked.splice(exIndex, 1);
                return {...state, checked: state.checked}
            } else {
                return {...state, checked: [...state.checked, action.payload], allChecked: false}
            }
        }
        default: return state;
    }
};
