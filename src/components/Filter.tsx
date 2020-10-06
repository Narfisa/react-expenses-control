import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionFilterChanged, FilterValue, IStoreState} from '../store/store';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state:IStoreState) => state.filter);

    function handleFilterAll() {
        dispatch(actionFilterChanged(FilterValue.ALL));
    }

    function handleFilterDone() {
        dispatch(actionFilterChanged(FilterValue.DONE));
    }
    function handleFilterUndone() {
        dispatch(actionFilterChanged(FilterValue.UNDONE));
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