import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    orders: JSON.parse(localStorage.getItem("items")) || [],
  },
  reducers: {
    onAddNewItem: (state, { payload }) => {
      if (
        !state.orders.find((item) => item.product.id === payload.product.id)
      ) {
        state.orders.push(payload);
        localStorage.setItem("items", JSON.stringify(state.orders));
      }
    },
    onDeleteItem: (state, { payload }) => {
      state.orders = state.orders.filter((item) => item.product.id != payload);
      localStorage.setItem("items", JSON.stringify(state.orders));
    },
    onChangeQuantity: (state, { payload }) => {
      if (payload.quantity > 0) {
        state.orders = state.orders.map((item) =>
          item.product.id != payload.id
            ? item
            : {
                ...item,
                quantity: payload.quantity,
                total: payload.quantity * item.product.price,
              }
        );
        localStorage.setItem("items", JSON.stringify(state.orders));
      }
    },
  },
});

export const { onAddNewItem, onDeleteItem, onChangeQuantity } =
  cartSlice.actions;
