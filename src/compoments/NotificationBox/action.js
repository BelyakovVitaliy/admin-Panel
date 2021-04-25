import {SHOW_NOTIFICATION, CLOSE_NOTIFICATION} from "./constants";


export const showNotification = ( { header, body } ) => {
    return {
        type: SHOW_NOTIFICATION,
        payLoad: {
            message: {
                header, body
            }
        }
    }
};

export const closeNotification = () => {
    return {
        type: CLOSE_NOTIFICATION
    }
};