import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice'
import itemReducer from '../features/items/itemSlice'
import typeReducer from '../features/types/typeSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        items: itemReducer,
        types: typeReducer
    },
})