import { STAT_URL } from "@/constant";
import { apiSlice } from "./apiSlice";

export const StatApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllStat: builder.query({
      query: (dataid) => ({
        method: "GET",
        credentials: "include",
        url: `${STAT_URL}/history/${dataid}`,
      }),
    }),
  }),
});

export const { useGetAllStatQuery } = StatApiSlice;
