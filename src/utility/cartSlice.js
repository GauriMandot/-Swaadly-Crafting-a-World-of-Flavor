import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
      // { id: 1, name: 'Apple shake', quantity: 2, price: 50 },
    ],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    deleteItem: (state, action) => {
      state.items = state.items.filter((obj) => {
        return obj.id !== action.payload;
      });
    },

    clearAllItems: (state) => {
        state.items.length=0;
    },
  },
});

export const {addItem,deleteItem,clearAllItems}=cartSlice.actions;

export default cartSlice.reducer;