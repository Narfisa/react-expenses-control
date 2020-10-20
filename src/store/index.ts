import { configureStore } from '@reduxjs/toolkit';
import buyingController from './byingSlice';
import gitSlice from './gitSlice';

export default configureStore({
    reducer: {
        buyingController,
        gitSlice,
    },
});
