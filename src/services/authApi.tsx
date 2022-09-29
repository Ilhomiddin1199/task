import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: " http://207.154.246.125:8888/" }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body: { email: string; password: string }) => {
        return {
          url: "login" ,
          method: "post",
          body,
        };
      },
    }),
    registerUser: builder.mutation({
      query: (body: { username:string; fullname:string; email: string; password: string,phone:string }) => {
        return {
          url: "register" ,
          method: "post",
          body,
        };
      },
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useLoginUserMutation,useRegisterUserMutation } = authApi;
//https://testtourapp.herokuapp.com//users/signin