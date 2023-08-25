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
         },
         calculateTotal : (state) =>{
            let total = 0 ;
            let quantity = 0 ;
            state.cartItems.forEach((item)=>{
                total += item.quantity * item.price;
                quantity += item.quantity;
            })
            state.quantity = quantity ;
            state.total = total ;
         }
    },
});

// console.log(cartSlice)

export  const { clearCart ,removeItem ,increase ,decrease ,calculateTotal } = cartSlice.actions;

export default cartSlice.reducer;