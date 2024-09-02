import { PAYMENT_URL } from "@/constant";
import { apiSlice } from "./apiSlice";

export const paymentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPayment: builder.mutation({
      query: (data) => ({
        method: "POST",
        body: data,
        credentials: "include",
        url: `${PAYMENT_URL}`,
      }),
    }),
    getSinglePayment: builder.query({
      query: (data) => ({
        method: "GET",
        credentials: "include",
        url: `${PAYMENT_URL}/history/${data?.id}`,
      }),
    }),
    getAllPayment: builder.query({
      query: (data) => ({
        method: "GET",
        credentials: "include",
        url: `${PAYMENT_URL}/history`,
      }),
    }),
    updatePaymentToSuccess: builder.mutation({
      query: (data) => ({
        method: "PUT",
        body: data,
        credentials: "include",
        url: `${PAYMENT_URL}/history/success/${data?.id}`,
      }),
    }),
    updatePaymentToFailed: builder.mutation({
      query: (data) => ({
        method: "PUT",
        body: data,
        credentials: "include",
        url: `${PAYMENT_URL}/history/failed/${data?.id}`,
      }),
    }),
  }),
});

export const {
  useCreatePaymentMutation,
  useGetSinglePaymentQuery,
  useUpdatePaymentToFailedMutation,
  useUpdatePaymentToSuccessMutation,
  useGetAllPaymentQuery
} = paymentApiSlice;
