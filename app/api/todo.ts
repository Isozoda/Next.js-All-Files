import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IResponse } from "../types/todoType";

// Define a service using a base URL and expected endpoints
export const TodoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://37.27.29.18:8001" }),
  endpoints: (build) => ({
    getTodos: build.query<IResponse, null>({
      query: () => `/api/to-dos`,
    }),
    deleteTodos: build.mutation<any, number>({
      query: (id) => ({
        url: `/api/to-dos?id=${id}`,
        method: "DELETE",
      }),
    }),
    deleteImgTodos: build.mutation<any, number>({
      query: (id) => ({
        url: `/api/to-dos/images/${id}`,
        method: "DELETE",
      }),
    }),
    ChangeStatus: build.mutation<any, any>({
      query: (id) => ({
        url: `/completed?id=${id}`,
        method: "PUT",
      }),
    }),
    AddNewUser: build.mutation<any, any>({
      query: (formdata) => ({
        url: `/api/to-dos`,
        method: "POST",
        body: formdata,
      }),
    }),
    EditUser: build.mutation<any, any>({
      query: (obj) => ({
        url: `/api/to-dos?id=${obj.id}`,
        method: "PUT",
        body: obj,
      }),
    }),
    addTodosImg: build.mutation<any, any>({
      query: ({ formData, id }) => ({
        url: `/api/to-dos/${id}/images`,
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const {
  useGetTodosQuery,
  useDeleteTodosMutation,
  useDeleteImgTodosMutation,
  useChangeStatusMutation,
  useAddNewUserMutation,
  useEditUserMutation,
} = TodoApi;
