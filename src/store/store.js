import { configureStore } from '@reduxjs/toolkit'
import selectedCity from './citySlice'


export const store = configureStore({
    reducer: {
        selectedCity: selectedCity,
    },
    // middleware: getDefaultMiddleware => getDefaultMiddleware(),
    // devTools: process.env.NODE_ENV !== 'production',
})