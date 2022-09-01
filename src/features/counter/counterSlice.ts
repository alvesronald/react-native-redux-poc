import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface CounteState {
    value: number
}


const initialState: CounteState = {
    value: 0
}


const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment: (state) => {
            state.value++
        },
        decrement: (state) => {
            state.value--
        },
        incrementByAmount:(state, action: PayloadAction<number>) =>{
            state.value += action.payload
            // state.value = state.value + action.payload
        },
        decrementByAmount:(state, action: PayloadAction<number>) =>{
            state.value -= action.payload
            // state.value = state.value - action.payload
        },
        reset: (state) => {
            state.value = initialState.value
        }
    },
});

export const { increment,decrement,incrementByAmount,decrementByAmount,reset } = counterSlice.actions
export default counterSlice.reducer;