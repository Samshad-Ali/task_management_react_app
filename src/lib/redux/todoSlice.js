import { createSlice } from "@reduxjs/toolkit";

const savedData = JSON.parse(localStorage.getItem('todos'));
const todoSlice = createSlice({
  name: "/todoSlice",
  initialState: {
    data: savedData?savedData:[],
  },
  reducers: {
    addTodo: (state, action) => {
      let newData = [...state.data, action.payload];
      state.data = newData;
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.data = state.data.filter((item) => item.id !== id);
    },
    completedTodo: (state, action) => {
      const id = action.payload;
        const index = state.data.findIndex(item=>item.id===id);
        if(index !== -1){
         state.data[index].isDone = true;
        }
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, completedTodo } = todoSlice.actions;
