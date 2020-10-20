import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import {IBuying} from "../components/Buying";

export enum FilterValue {
    ALL,
    DONE,
    UNDONE
}

export type SliceState = {
    buyings: IBuying[];
    filter: FilterValue;
}

export interface NewBuying {
    name: string;
    cost: number;
    isDone: boolean;
}

export const buyingController = createSlice({
    name: 'buyingController',
    initialState: {
        buyings: [],
        filter: FilterValue.ALL
    },
    reducers: {
        add: (state: SliceState, action: PayloadAction<NewBuying>) => {
            const newBuying = {
                id: new Date().getTime(),
                ...action.payload
            }
            state.buyings = [...state.buyings, newBuying];
        },
        delete: (state: SliceState, action: PayloadAction<number>) => {
            state.buyings = state.buyings.filter((buying) => buying.id !== action.payload);
        },
        change: (state: SliceState, action: PayloadAction<IBuying>) => {
            state.buyings = state.buyings.map((buying) => {
                if (buying.id === action.payload.id) {
                    buying = action.payload
                }
                return buying;
            });
        },
        filter: (state: SliceState, action: PayloadAction<FilterValue>) => {
            state.filter = action.payload;
        },
        switchDone: (state: SliceState, action: PayloadAction<number>) => {
            state.buyings = state.buyings.map((buying) => {
                if (buying.id === action.payload) {
                    buying.isDone = !buying.isDone
                }
                return buying;
            });
        }
    }
})

export const actions = buyingController.actions;
export const getFilter = (state: any) => state.buyingController.filter;
export const getList = (state: any) => state.buyingController.buyings;
export const getFilteredList = createSelector(
    getFilter,
    getList,
    (filter, list) => list.filter((x: IBuying) => {
    if (filter === FilterValue.DONE) {
        return x.isDone 
    }
    if (filter === FilterValue.UNDONE) {
        return !x.isDone 
    }
    return true;
}));
export default buyingController.reducer;