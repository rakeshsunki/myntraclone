import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./fetchstore";
import headerSlice from "./headerstore";
import bagSlice from "./bag";
import wishlistSlice from "./wishliststore";



const myntraStore=configureStore({reducer:{
    header:headerSlice.reducer,
    products:productSlice.reducer,
    bag:bagSlice.reducer,
    wishlist:wishlistSlice.reducer
}
});
export const headerActions=headerSlice.actions;
export const productActions=productSlice.actions;
export const bagActions=bagSlice.actions;
export const wishlistActions=wishlistSlice.actions;
export default myntraStore;