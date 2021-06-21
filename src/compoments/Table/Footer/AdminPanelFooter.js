import React, {useState} from "react";
import styles from "./AdminPanelFooter.module.css";
import {Label} from "../../Label/Label";
import IcoButton from "../../IcoButton/IcoButton";
import {ReactComponent as pencil} from "../../static/icons/pencil.svg";
import {STYLE} from "../../IcoButton/constants";
import {ReactComponent as bin} from "../../static/icons/bin.svg";
import {Pagination} from "./Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {REDUCER_NAME, removeItem, updateItem} from "../../redux/actions";
import {ConfirmDialog} from "../../ConfirmDialog/ConfirmDialog";
import EditItem from "../../EditItem/EditItem";
import {Footer} from "./Footer";

export const AdminPanelFooter = () => {
    const dispatch = useDispatch();
    const checkedCount = useSelector((state) => state[REDUCER_NAME].checkedRows.length);
    const checkedRows = useSelector((state) => state[REDUCER_NAME].checkedRows);
    const pageCount = useSelector((state) => state[REDUCER_NAME].pageCount);

    const [confirmDialogVisible, setConfirmDialogVisible] = useState(false);
    const [editDialogVisible, setEditDialogVisible] = useState(false);

    const toggleConfirmDialogVisible = () => {
        checkedCount > 0 && setConfirmDialogVisible(!confirmDialogVisible);
    };

    const cancelDeleteHandler = () => {
        toggleConfirmDialogVisible();
    };

    const confirmDeleteHandler = () => {
        dispatch(removeItem(checkedRows));
        toggleConfirmDialogVisible();
    };

    const saveHandler = (item) => {
        toggleEditFormVisible();
        dispatch(updateItem(item));
    };

    const toggleEditFormVisible = () => {
        checkedCount === 1 && setEditDialogVisible(!editDialogVisible)
    };

    return <Footer>
            <div className={styles.buttons}>
                <Label text={"Выбрано записей: " + checkedCount}/>
                {editDialogVisible ?
                    <EditItem item={checkedRows[0]} onSave={saveHandler}/>
                    : null}
                <IcoButton iconComponent={pencil} title={"Изменить статус"} styleType={STYLE.SIMPLE} onClickHandler={toggleEditFormVisible}/>
                {(confirmDialogVisible) ?
                    <ConfirmDialog
                        header={`Удалить ${checkedCount} записей?`}
                        yesText={"Да"}
                        noText={"Нет"}
                        yesHandler={confirmDeleteHandler}
                        noHandler={cancelDeleteHandler}
                    /> : null}
                <IcoButton iconComponent={bin} title={"Удалить"} styleType={STYLE.ATTENTION} onClickHandler={toggleConfirmDialogVisible}/>
            </div>
            <Pagination pagesCount={pageCount}/>
    </Footer>
};