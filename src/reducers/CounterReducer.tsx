import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface childApp1_CounterState {
  counter: number
}

interface childApp1_State {
  childApp1: childApp1_CounterState;
}
const initialState: childApp1_State = {
  childApp1: {
    counter:0
  }
}


const childApp1 = createSlice({
  name: 'counters',
  initialState: initialState,
  reducers: {
    childApp1_increment: (state:childApp1_State) => {
      state.childApp1.counter++;
    },
    childApp1_decrement(state: childApp1_State) {
      state.childApp1.counter--;
    },
    childApp1_setValue(state: childApp1_State, action:PayloadAction<number>) {
      state.childApp1.counter = action.payload;
    }
  }
})

export const { childApp1_increment, childApp1_decrement, childApp1_setValue } = childApp1.actions

export default childApp1.reducer