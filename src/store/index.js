import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice'
import itemReducer from '../features/items/itemSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        item: itemReducer
    },
})