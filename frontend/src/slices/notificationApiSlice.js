import { NOTIFICATION_URL } from "@/constant";
import { apiSlice } from "./apiSlice";

export const notificationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createNotification: builder.mutation({
      query: (data) => ({
        method: "POST",
        body: data,
        credentials: true,
        url: `${NOTIFICATION_URL}`,
      }),
    }),
    getAllNotification: builder.query({
      query: (data) => ({
        method: "GET",
        credentials: true,
        url: `${NOTIFICATION_URL}/admin`,
      }),
    }),
    deleteNotification: builder.mutation({
      query: (data) => ({
        method: "DELETE",
        body: data,
        credentials: true,
        url: `${NOTIFICATION_URL}/admin/${data?.id}`,
      }),
    }),
  }),
});

export const {
  useCreateNotificationMutation,
  useDeleteNotificationMutation,
  useGetAllNotificationQuery,
} = notificationApiSlice;
