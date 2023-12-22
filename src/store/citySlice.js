import { createSlice } from '@reduxjs/toolkit'


const selectedCity = createSlice({
    name: 'currentCity',
    initialState: {
        current: {},
    },
    reducers: {
        currentCity(state, action) {
            state.current = action.payload
        },
    }
})

export const { currentCity } = selectedCity.actions
export default selectedCity.reducer