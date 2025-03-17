import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const submitOrder = createAsyncThunk(
  "orders/submit",
  async (orderData) => {
    console.log("order Data", orderData)
    const response = await fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error("Failed to submit order");
    }

    return await response.json();
  }
);

const bagSlice = createSlice({
  name: "bag",
  initialState: { baglist: [],status: "idle" },
  reducers: {
    CLEAR_BAG: (state) => {
      state.baglist = [];
      state.status = "idle";
    },
    FORMSUBMIT: (state) => {
      state.baglist = [];
    },
    WISHADD: (state, action) => {
      state.baglist=[...state.baglist,...action.payload]
    },
    ADD_TO_BAG: (state, action) => {
      state.baglist.push(action.payload)
    },
    REMOVE_FROM_BAG: (state, action) => {
      state.baglist = state.baglist.filter(
        (item) => item.UID !== action.payload
      );
    },
  },
});

export default bagSlice;
