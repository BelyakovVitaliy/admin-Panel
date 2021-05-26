import React, {Fragment} from 'react'
import IcoButton from "../../../../IcoButton/IcoButton";
import sunIcon from '../../../../static/icons/dot.svg'
import checkmark from '../../../../static/icons/checkmark.svg'
import abort from '../../../../static/icons/abort.svg'

const defineFormat = (value) => {
    switch (value) {
        case 'Новый':
            return <IcoButton iconSrc={sunIcon} title={value}/>
        case 'Выполнен':
            return <IcoButton iconSrc={checkmark} title={value}/>
        case 'Отменён':
            return <IcoButton iconSrc={abort} title={value}/>
        case 'Расчёт':
            return <IcoButton iconSrc={sunIcon} title={value}/>
        case 'Отложен':
            return <IcoButton iconSrc={sunIcon} title={value}/>
        default:
            return <div>{value}</div>
    }
}

export const StatusFormatter = ({value}) => {
    return defineFormat(value);
};