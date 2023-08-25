import { createSlice } from "@reduxjs/toolkit"; 
import techItems from "../techItems";

const initialState = {
    cartItems: techItems ,
    quantity : 5 ,
    total : 0,
};

console.log(techItems)

const cartSlice = createSlice({
    name: "cart" ,
    initialState,
    reducers: {
        clearCart: (state)=>{
            state.cartItems = [];
        },
        removeItem :(state , aciton) => {
            const itemId = aciton.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        },
        increase : (state , action) => {
            const cartItem = state.cartItems.find(
                (item) =>item.id === action.payload
            );
            cartItem.quantity += 1;
         },
         decrease : (state , action) => {
            const cartItem = state.cartItems.find(
                (item) =>item.id === action.payload
            );
            cartItem.quantity -= 1;
         }
    },
});

// console.log(cartSlice)

export  const { clearCart ,removeItem ,increase ,decrease } = cartSlice.actions;

export default cartSlice.reducer;