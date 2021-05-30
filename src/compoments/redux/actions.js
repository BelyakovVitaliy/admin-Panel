export const ACTIVE_PAGE = 'ACTIVE_PAGE';
export const APPLY_FILTERS = 'APPLY_FILTERS';
export const FILTER_VISIBLE = 'FILTER_VISIBLE';
export const ROW_CHECKED = 'ROW_CHECKED';
export const HEADER_CHECKED = 'HEADER_CHECKED';

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