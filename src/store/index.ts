import { configureStore } from '@reduxjs/toolkit';
import buyingController from './byingSlice';

export default configureStore({
    reducer: {
        buyingController: buyingController,
    },
});
