import { REVIEW_URL } from "@/constant";
import { apiSlice } from "./apiSlice";

export const reviewApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (data) => ({
        method: "POST",
        body: data,
        credentials: "include",
        url: `${REVIEW_URL}`,
      }),
    }),
    getAllReview: builder.query({
      query: (data) => ({
        method: "GET",
        credentials: "include",
        url: `${REVIEW_URL}/history/${data?.id}`,
      }),
    }),
    getSellerReview: builder.query({
      query: (data) => ({
        method: "GET",
        credentials: "include",
        url: `${REVIEW_URL}/seller-history`,
      }),
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useGetSellerReviewQuery,
  useGetAllReviewQuery,
} = reviewApiSlice;
