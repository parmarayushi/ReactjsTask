import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./pages/utility/services/products.service";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productApi.middleware]),
});
