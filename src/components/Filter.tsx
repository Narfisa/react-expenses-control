import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, FilterValue, getFilter} from '../store/byingSlice';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    function handleFilterAll() {
        dispatch(actions.filter(FilterValue.ALL));
    }

    function handleFilterDone() {
        dispatch(actions.filter(FilterValue.DONE));
    }

    function handleFilterUndone() {
        dispatch(actions.filter(FilterValue.UNDONE));
    }

    return <>
            <span onClick={handleFilterAll} 
            style={{textDecoration: filter === FilterValue.ALL ? 'underline' : 'none'}}>
                All
            </span>
            &nbsp;
            <span onClick={handleFilterDone}
            style={{textDecoration: filter === FilterValue.DONE ? 'underline' : 'none'}}>
                Done
            </span>
            &nbsp;
            <span onClick={handleFilterUndone}
            style={{textDecoration: filter === FilterValue.UNDONE ? 'underline' : 'none'}}>
                Undone
            </span>
        </>
}