import { connect } from 'react-redux'
import React from "react";
import {REDUCER_NAME} from "./constants";
import './NotificationBox.css'
import {closeNotification, showNotification} from "./action";

const NotificationBox = ( props ) => {

    let { header, body } = props.message || {};

    const closeBox = () => {
        props.close()
    };

    return (header || body) ?
            <div className="notificationBox">
                <div className={"notificationBox_header"}>
                    {header}
                    <button className={"notificationBox_close"} onClick={closeBox}>X</button>
                </div>
                <div className={"notificationBox__body"}>
                    {body}
                </div>
            </div>:null

};

const mapStateToProps = (state) => {
    return {
        message: state[REDUCER_NAME].message
    }
};

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    close: () => dispatch(closeNotification())

});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationBox)