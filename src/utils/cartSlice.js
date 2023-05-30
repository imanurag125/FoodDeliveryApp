import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
      // console.log(state.cart[0].id);
    },
    removeItem: (state, action) => {
      // state.cart.forEach((ele) => console.log(ele.id == action.payload));
      state.cart = state.cart.filter((ele) => ele.id != action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem } = cartSlice.actions;
