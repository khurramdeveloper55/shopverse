import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import loadingReducer from "./slices/loadingSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    loading: loadingReducer,
  },
});
