import {useDispatch, useSelector} from 'react-redux'
import React, {useState} from "react";
import IcoButton from "../IcoButton/IcoButton";
import {ReactComponent as sunIcon} from '../static/icons/sun.svg'
import Table from "../Table/Table";
import {columns} from "../Server/constants";
import styles from "./AdminPanel.module.css"
import ExtendedFilters from "../Filters/ExtendedFilters";
import {ReactComponent as refresh} from "../static/icons/refresh.svg";
import {ReactComponent as filterIco} from "../static/icons/filter.svg";
import {ReactComponent as sunIco} from "../static/icons/sun.svg";
import {ReactComponent as moonIco} from "../static/icons/moon.svg";
import {toggleFilterVisible, REDUCER_NAME, setFilters, changeTheme} from "../redux/actions";
import {STYLE} from "../IcoButton/constants";
import {Input} from "../Input/Input";
import {createFilter} from "./utils";
import {TEXT_TYPE} from "../Filters/constants";
import {ConfirmDialog} from "../ConfirmDialog/ConfirmDialog";
import {DARK_THEME, LIGHT_THEME} from "./constants";
import cc from "classcat"

const AdminPanel = () => {

    const [themeDialogVisible, setThemeDialogVisible] = useState(false);

    const data = useSelector((state) => state[REDUCER_NAME].data);
    const extendedFiltersVisible = useSelector(state => state[REDUCER_NAME].filterVisible);
    const activeTheme = useSelector(state => state[REDUCER_NAME].theme);

    const dispatch = useDispatch();
    const toggleFiltersVisible = () => {
        dispatch(toggleFilterVisible())
    };

    const onFioFilterChange = (filterName, fieldName, value) => {
        const filter = createFilter(fieldName, value, TEXT_TYPE, true);
        dispatch(setFilters({
            [filterName]:filter
        }))
    };

    const onChangeTheme = (theme) => {
        dispatch(changeTheme(theme));
        onChangeThemeClick()
    };

    const onChangeThemeClick = () => {
        setThemeDialogVisible(!themeDialogVisible)
    };


    const style = cc(
        {
            [styles.panel]: true,
            [styles[activeTheme]]: true
        }
    )

    return (
        <div className={style}>
            <div className={styles.header}>
                <div className={styles.title}>Список заказов</div>
                {(themeDialogVisible) ?
                    <ConfirmDialog
                        header={`Выберите тему`}
                        yesText={"Светлая тема"}
                        noText={"Темная тема"}
                        yesHandler={() => onChangeTheme(LIGHT_THEME)}
                        yesIco={sunIco}
                        noHandler={() => onChangeTheme(DARK_THEME)}
                        noIco={moonIco}
                    /> : null}
                <IcoButton iconComponent={sunIcon} title={"Сменить тему"} onClickHandler={onChangeThemeClick}/>
            </div>
            <div className={styles.filters}>
                <div className={styles.fastFilterBlock}>
                    <div className={styles.buttonInput}>
                        <Input placeHolder={'Введите ФИО'} name={"fio"} onChange={onFioFilterChange}/>
                        <IcoButton title={"Фильтры"} styleType={STYLE.SIMPLE} iconComponent={filterIco} onClickHandler={toggleFiltersVisible}/>
                    </div>
                    <div className={styles.loadStatus}>
                        <IcoButton title={"Загрузка"} iconComponent={refresh}/>
                    </div>
                </div>
                {extendedFiltersVisible && <ExtendedFilters/>}
            </div>
            <Table columns={ columns } data={data} renderCheckBox={true}/>
        </div>
    )};

export default AdminPanel