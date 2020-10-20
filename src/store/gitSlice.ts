import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import axios from "axios"

const URL = "https://api.github.com/users/";

export enum ActionValue {
    NONE,
    DONE,
    ERROR,
    PROCESS
}

export type gitSliceState = {
    result: JSON | undefined;
    status: ActionValue;
}

export const gitSlice = createSlice({
    name: 'gitSlice',
    initialState: {
        result: undefined,
        status: ActionValue.NONE
    },
    reducers: {
        gitSave: (state: gitSliceState, action: PayloadAction<JSON>) => {
            state.result = action.payload;
            state.status = ActionValue.DONE;
        }
    },

})

export const getGitHub = (username: string) => (dispatch: any) => {
    axios.get(`${URL}${username}`)
    .then(response => {
        dispatch(actions.gitSave(response.data));
    })
};

export const actions = gitSlice.actions;
export const getStatus = (state: any) => state.gitSlice.status;
export const getResult = (state: any) => state.gitSlice.result;

export default gitSlice.reducer;