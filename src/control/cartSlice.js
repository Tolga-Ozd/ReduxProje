import { createSlice } from "@reduxjs/toolkit";
import techItems from "../techItems";

const initialState = {
    cartItems: techItems,
    quantity: 5,
    total: 0,
};

const showAlert = (message) => {
    alert(message);
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },
        increase: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            if (cartItem.quantity < 5) {
                cartItem.quantity += 1;
            } else {
                showAlert("Ürün sayısı 5'ten fazla olamaz!");
            }
        },
        decrease: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            if (cartItem.quantity >=1) {
                cartItem.quantity -= 1;
            } else {
                showAlert("Ürün sayısı 0'dan düşük olamaz!");
            }
        },
        calculateTotal: (state) => {
            let total = 0;
            let quantity = 0;
            state.cartItems.forEach((item) => {
                total += item.quantity * item.price;
                quantity += item.quantity;
            });
            state.quantity = quantity;
            state.total = total;
        },
    },
});

export const { clearCart, removeItem, increase, decrease, calculateTotal } = cartSlice.actions;

export default cartSlice.reducer;
