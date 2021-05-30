import React from "react";
import {maxPagination} from "../../constants";
import styles from './Pagination.module.css'
import {range} from "lodash";
import PaginationItem from "./PaginationItem";
import {useDispatch, useSelector} from "react-redux";
import {REDUCER_NAME, setActivePage} from "../../../redux/actions";

export const Pagination = ({pagesCount}) => {

    const dispatch = useDispatch();

    const onClick = (page) => {
        dispatch(setActivePage(page))
    };

    const activePage = useSelector(state => state[REDUCER_NAME].activePage);

    return <nav className={styles.pagination}>
        { pagesCount > 0 ? range(1, pagesCount + 1).map(page => {
            if (page < maxPagination + 1 || page === pagesCount) {
                return <PaginationItem page={page} checked={activePage === page} onClick={onClick}/>
            } else if (page === maxPagination + 1) {
                return <PaginationItem page='...'/>
            } else {
                return null
            }
        }): null}
    </nav>
};