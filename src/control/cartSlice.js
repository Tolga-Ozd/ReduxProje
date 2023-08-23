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
})

console.log(cartSlice)

export default cartSlice.reducer;