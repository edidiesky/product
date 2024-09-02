import { PRODUCTS_URL } from "@/constant";
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: (data) => ({
        method: "GET",
        credentials: "include",
        url: `${PRODUCTS_URL}`,
      }),
    }),
    getAllAdminProduct: builder.query({
      query: (data) => ({
        method: "GET",
        credentials: "include",
        url: `${PRODUCTS_URL}/admin`,
      }),
    }),
    getSingleProduct: builder.query({
      query: (data) => ({
        method: "GET",
        credentials: "include",
        url: `${PRODUCTS_URL}/${data}`,
      }),
    }),
    adminDeleteProduct: builder.mutation({
      query: (data) => ({
        method: "DELETE",
        body: data,
        credentials: "include",
        url: `${PRODUCTS_URL}/${data?.id}`,
      }),
    }),
    adminUpdateProduct: builder.mutation({
      query: (data) => ({
        method: "PUT",
        body: data,
        credentials: "include",
        url: `${PRODUCTS_URL}/${data?.id}`,
      }),
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useGetSingleProductQuery,
  useAdminUpdateProductMutation,
  useAdminDeleteProductMutation,
  useGetAllAdminProductQuery,
} = productApiSlice;
