import Cell from "./Cell";
import {SIZE} from "./constants";
import React from "react";


export const CheckBoxCell = ({id, checked, onClick}) => {
    return  <Cell item={<input id={id} checked={checked ? "checked": null} type="checkbox" onChange={() => onClick(id)}/>} column={{size: SIZE.TINY}}/>
}