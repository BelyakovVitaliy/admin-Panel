import React from "react";
import HeaderRow from "../Row/HeaderRow";


export const Header = ({ columns, renderCheckBox }) => {
    return <HeaderRow columns={columns} renderCheckBox={renderCheckBox}/>;
}