import { createSlice } from '@reduxjs/toolkit'


const stateElements = createSlice({
    name: 'stateElements',
    initialState: {
        showOverlay: false,
    },
    reducers: {
        toggleOverlay(state, action) {
            state.showOverlay = !action.payload
            // console.log(action)
        },
    }
})

export const { toggleOverlay } = stateElements.actions
export default stateElements.reducer