import { configureStore } from '@reduxjs/toolkit'
import selectedCity from './citySlice'
import stateElements from './stateElementSlice'

export const store = configureStore({
    reducer: {
        selectedCity: selectedCity,
        stateElements:stateElements
    },
    // middleware: getDefaultMiddleware => getDefaultMiddleware(),
    // devTools: process.env.NODE_ENV !== 'production',
})