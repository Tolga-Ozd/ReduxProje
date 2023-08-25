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
        }
    },
});

// console.log(cartSlice)

export  const { clearCart ,removeItem } = cartSlice.actions;

export default cartSlice.reducer;