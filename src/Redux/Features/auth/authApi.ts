import { baseApi } from "@/Redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (signupInfo) => ({
        url: "/create-user",
        method: "POST",
        body: signupInfo,
      }),
    }),
    loginUser: builder.mutation({
      query: (loginInfo) => ({
        url: "/login",
        method: "POST",
        body: loginInfo,
      }),
    }),
  }),
});
export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
