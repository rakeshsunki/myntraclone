import BEAUTY,{KIDS,HOME_LIVING,MEN,WOMEN } from "./headerBanner";
import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "header",
  initialState: { list: null },
  reducers: {
    MEN: (state) => {
      state.list = MEN;
    },
    WOMEN: (state) => {
      state.list = WOMEN;
    },
    KIDS: (state) => {
      state.list = KIDS;
    },
    HOME_lIVING: (state) => {
      state.list = HOME_LIVING;
    },
    BEAUTY: (state) => {
      state.list = BEAUTY;
    },
    // STUDIO:(state)=>{},
    CLEAR: (state) => {
      state.list = null;
    },
  },
});
export default headerSlice;
