import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slices/cartSlice";

const store = configureStore({
    reducer: { cart: cartSlice },
});
console.log("oncreate store : ", store.getState());

store.subscribe(() => {
    console.log("STORE CHANGE : ", store.getState());
});

export default store;