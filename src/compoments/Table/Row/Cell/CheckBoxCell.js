import Cell from "./Cell";
import {SIZE} from "./constants";
import React from "react";


export const CheckBoxCell = (selectHandler) => {
    return selectHandler ? <Cell item={<input type="checkbox" onClick={selectHandler}/>} column={{size: SIZE.TINY}}/> : null
}