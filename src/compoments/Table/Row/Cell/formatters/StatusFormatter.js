import React from 'react'
import IcoButton from "../../../../IcoButton/IcoButton";
import {ReactComponent as sunIcon} from '../../../../static/icons/dot.svg'
import {ReactComponent as checkmark} from '../../../../static/icons/checkmark.svg'
import {ReactComponent as abort} from '../../../../static/icons/abort.svg'
import {STYLE} from "../../../../IcoButton/constants";


const defineFormat = (value) => {
    switch (value) {
        case 'Новый':
            return <IcoButton iconComponent={sunIcon} styleType={STYLE.NEW}  title={value}/>;
        case 'Выполнен':
            return <IcoButton iconComponent={checkmark} styleType={STYLE.COMPLETED} title={value}/>;
        case 'Отменён':
            return <IcoButton iconComponent={abort} styleType={STYLE.CANCELED} title={value}/>;
        case 'Расчёт':
            return <IcoButton iconComponent={sunIcon} styleType={STYLE.CALC} title={value}/>;
        case 'Отложен':
            return <IcoButton iconComponent={sunIcon} styleType={STYLE.DELAYED} title={value}/>;
        default:
            return <div>{value}</div>
    }
}

export const StatusFormatter = ({value}) => {
    return defineFormat(value);
};