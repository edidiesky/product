import { STAT_URL } from "@/constant";
import { apiSlice } from "./apiSlice";

export const StatApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllStat: builder.query({
      query: (data) => ({
        method: "GET",
        credentials: "include",
        url: `${STAT_URL}/history/${data?.id}`,
      }),
    }),
  }),
});

export const { useGetAllStatQuery } = StatApiSlice;
