export const ACTIVE_PAGE = 'ACTIVE_PAGE';
export const APPLY_FILTERS = 'APPLY_FILTERS';
export const FILTER_VISIBLE = 'FILTER_VISIBLE';
export const ROW_CHECKED = 'ROW_CHECKED';
export const HEADER_CHECKED = 'HEADER_CHECKED';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const ORDER_ITEM = 'ORDER_ITEM';
export const CHANGE_THEME = 'CHANGE_ITEM';

export const REDUCER_NAME = 'adminPanelReducer';

export const toggleFilterVisible = () => {
    return {
        type: FILTER_VISIBLE
    }
};

export const setActivePage = (pageNum) => {
    return {
        type:ACTIVE_PAGE,
        payload: pageNum
    }
};

export const setFilters = (filters) => {
    return {
        type:APPLY_FILTERS,
        payload: filters
    }
};
export const toggleRowChecked = (rowId) => {
    return {
        type:ROW_CHECKED,
        payload: rowId
    }
};

export const toggleHeaderChecked = () => {
    return {
        type:HEADER_CHECKED,
    }
};


export const removeItem = (id) => {
    return {
        type:REMOVE_ITEM,
        payload: id
    }
};

export const updateItem = (item) => {
    return {
        type:UPDATE_ITEM,
        payload: item
    }
};
export const orderItem = (item) => {
    return {
        type:ORDER_ITEM,
        payload: item
    }
};
export const changeTheme = (theme) => {
    return {
        type:CHANGE_THEME,
        payload: theme
    }
};