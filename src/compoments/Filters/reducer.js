import {FILTER_VISIBLE} from "./action";
export const FILTER_REDUCER_NAME='filterVisibleReducer';

const initialState = {
    filterVisible: false
};

export const filterVisibleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_VISIBLE:
            return {...state, filterVisible: !state.filterVisible};
        default: return state
    }
};
