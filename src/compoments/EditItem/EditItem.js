import styles from './EditItem.module.css'
import React, {useState} from "react";
import {idAlias} from "../redux/reducers";
import {Input} from "../Input/Input";
import IcoButton from "../IcoButton/IcoButton";
import {STYLE} from "../IcoButton/constants";
import * as moment from "moment";
import DropDown from "../DropDown/DrowDown";
import {detailedColumns, LOYALTY, STATUSES} from "../Server/constants";
import {set} from "lodash";
import Table from "../Table/Table";
import {Footer} from "../Table/Footer/Footer";

const EditItem = ({item = {}, onSave}) => {


    const [state, setState] = useState({entity: item});


    const onChangeHandler = (fieldName, valueKey, value) => {
        set(state.entity, fieldName, value);
        setState({entity: state.entity})
    };
    const { entity } = state;

    const footer = (
        <Footer>
            <div className={styles.footerText}>
                <p>{'Итоговая сумма: ' + entity.sum + ' ₽'}</p>
            </div>
        </Footer>
    );

    return (
        <div className={styles.editItemForm}>
            <div className={styles.caption}>
                <p className={styles.captionText}>{`Заказ #${entity[idAlias]}`}</p>
            </div>
            <div className={styles.editFormBody}>
                <div className={styles.inputElement}>
                    <Input type={"date"}
                           label={'Дата и время заказа'}
                           value={moment(entity.orderDate).format("YYYY-MM-DD")}
                           name={'dateOrder'}
                           onChange={onChangeHandler}
                           disabled={"disabled"}/>
                </div>
                <div className={styles.inputElement}>
                    <Input label={'ФИО покупателя'}  value={entity.fio} name={'fio'} onChange={onChangeHandler}/>
                </div>
                <div className={styles.inputElement}>
                    <DropDown title={'Уровень лояльности'} value={entity.loyalty} onChange={onChangeHandler} values={LOYALTY} disabled={"disabled"} name={'loyalty'}/>
                </div>
                <div className={styles.inputElement}>
                    <Table columns={detailedColumns} data={entity.detailedInfo} customFooter={footer}/>
                </div>
                <div className={styles.inputElement}>
                    <DropDown title={'Статус заказа'} value={entity.status} onChange={onChangeHandler} values={STATUSES} name={'status'}/>
                </div>
                <div className={styles.inputElement}>
                    <Input label={'Код подтверждения'} value={entity.confirmKey} name={'confirmKey'} onChange={onChangeHandler}/>
                </div>
            </div>
            <IcoButton onClickHandler={() => onSave(state.entity)} title={"Сохранить"} styleType={STYLE.SIMPLE}/>
        </div>
    )
};

export default EditItem;