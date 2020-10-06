import {createStore} from 'redux';
import {IBuying} from "../components/Buying";

const ADD = 'Add';
const DELETE = 'Delete';
const CHANGE = 'Change';
const FILTER = 'Filter';
const SWITCHDONE = 'Done';

export enum FilterValue {
    ALL,
    DONE,
    UNDONE
}

export const actionFilterChanged = (value: FilterValue) => ({
    type: FILTER,
    value
})

export const actionSwitchDone = (index: number) => ({
    type: SWITCHDONE,
    index
})

export const actionAdd = (buying: IBuying) => ({
    type: ADD,
    buying
})

export const actionDelete = (index: number) => ({
    type: DELETE,
    index
})

export const actionChange = (buying: IBuying, index: number) => ({
    type: CHANGE,
    buying, index
})

type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V

export type ActionType =
| Action<typeof ADD, { buying: IBuying }>
| Action<typeof DELETE, { index: number }>
| Action<typeof CHANGE, { buying: IBuying, index: number }>
| Action<typeof FILTER, { value: FilterValue }>
| Action<typeof SWITCHDONE, { index: number }>

export interface IStoreState {
    buyings: IBuying[];
    filter: FilterValue;
}

const initialState:IStoreState  = {
    buyings: [],
    filter: FilterValue.ALL
};

function reducer(state: IStoreState = initialState, action: ActionType) {
    switch(action.type){
        case ADD: {
            action.buying.id = Date.now();
            return {
                ...state,
                buyings: [...state.buyings, action.buying]
            }
        }
        case DELETE: {
            state.buyings.splice(action.index,1);
            return{
                ...state,
                buyings: [...state.buyings]
            }
        }
        case CHANGE: {
            state.buyings[action.index] = action.buying
            return {
                ...state,
                buyings: [...state.buyings]
            }
        }
        case FILTER: {
            return {
                ...state,
                filter: action.value
            }
        }
        case SWITCHDONE: {
            state.buyings[action.index].isDone = !state.buyings[action.index].isDone
            return {
                ...state,
                buyings: [...state.buyings]           
            }
        }
        default: {
            return {...state}
        }
    }
}

export default createStore(reducer);