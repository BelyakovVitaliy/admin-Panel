import {CLOSE_NOTIFICATION, SHOW_NOTIFICATION} from "./constants";
import {showNotification} from "./action";

const initialState = {};

export const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NOTIFICATION:
            return {message: action.payLoad.message};
        case CLOSE_NOTIFICATION:
            return {message: {}};
        default: return state
    }
};


//export const showError =  (message) => (dispatch) => dispatch(showNotification(message))
