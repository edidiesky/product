import { UPLOAD_URL } from "@/constant";
import { apiSlice } from "./apiSlice";

export const uploadApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadItem: builder.mutation({
      query: (data) => ({
        method: "POST",
        credentials: true,
        body: data,
        url: `${UPLOAD_URL}`,
      }),
    }),
  }),
});

export const { useUploadItemMutation } = uploadApiSlice;
