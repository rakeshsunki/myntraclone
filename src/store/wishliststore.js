import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { wishlist: [] },
  reducers: {
    EMPTY: (state) => {
      state.wishlist = [];
    },
    ADD_TO_WISHLIST: (state, action) => {
      let wlist = state.wishlist;
      state.wishlist = [...wlist, action.payload];

    },
    REMOVE_FROM_WISHLIST: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.UID !== action.payload
      );
    },
    HEARTREMOVE:(state,action)=>{
      state.wishlist=state.wishlist.filter(
        (item)=>item.product.id!=action.payload
      )
    }
  },
});
export default wishlistSlice;
