import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // loader: loaderReducer,
    // [adminApi.reducerPath]: adminApi.reducer,
    // [signUpApi.reducerPath]: signUpApi.reducer,
    // [userApi.reducerPath]: userApi.reducer,
    // [notificationApi.reducerPath]: notificationApi.reducer,
    // auth: authReducer,
    // search:searchReducer
  },

  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat([
  //       adminApi.middleware,
  //       signUpApi.middleware,
  //       userApi.middleware,
  //       notificationApi.middleware,
  //     ]),
});
