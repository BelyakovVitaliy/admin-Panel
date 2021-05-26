import React from "react";
import {HEADER} from "../constants";
import Row from "../Row/Row";


export const Header = ({ columns, onCheckboxClick }) => {

    return <Row type={HEADER} columns={columns} checkBoxHandler={onCheckboxClick}/>;
}