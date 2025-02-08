import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../../shared/utility/services/axiosBaseQuery";

const baseURL = "https://localhost:3000";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: axiosBaseQuery({
    baseUrl: baseURL,
  }),
  tagTypes: ["Product"],

  endpoints: (builder) => ({
    getProductListData: builder.query({
      query: () => ({
        url: `products`,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductListDataQuery } = productApi;
