import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const serverProducts = createAsyncThunk(
  "products/fetch",
  async (category) => {
    const response = await fetch(`https://myntraclone-json-server.onrender.com/${category}`);
    return response.json();
  }
);

export const DeleteOrder = createAsyncThunk(
  "orders/delete",
  async (orderid) => {
    console.log("order Data", orderid)
    await fetch(`https://myntraclone-json-server.onrender.com/orders/${orderid}`, {
      method: "DELETE",
    });

    return orderid;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: { list: [], status: "empty"},
  reducers: {
    ORDERCOMPONENT:(state)=>{
      if(state.status!=="empty"){
      state.status="empty";
    }
    },
  },
  extraReducers: (bulider) => {
    bulider
      .addCase(serverProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(serverProducts.fulfilled, (state, action) => {
        state.status = "Success";
        state.list = action.payload;
      })
      .addCase(serverProducts.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(DeleteOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(DeleteOrder.fulfilled, (state, action) => {
        state.status = "success";
        state.list=state.list.filter(()=>list.id!==action.payload)
      })
      .addCase(DeleteOrder.rejected, (state) => {
        state.status = "failed";
      });
  },
  
});
export default productSlice;

// () => {
//   return fetch("https://dummyjson.com/products")
//     .then((res) => res.json())
//     .then((obj) => {
//       return obj;
//     });
// };
