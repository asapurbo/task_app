import { configureStore } from '@reduxjs/toolkit'
import {apiSlice} from '../features/api/apiSlice';
import filterSlice from '../features/filter/filterSlice';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        filters: filterSlice,
    },
    middleware: (defaultMiddleware) => {
        return defaultMiddleware().concat(apiSlice.middleware)
    }
})

export default store;