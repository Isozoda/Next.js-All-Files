import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IResponse } from "../types/todoType";

export const TodoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://37.27.29.18:8001" }),
  tagTypes: ["ToDo", "toDoById"],
  endpoints: (build) => ({
    getTodos: build.query<IResponse, null>({
      query: () => `/api/to-dos`,
      providesTags: ["ToDo"]
    }),
    getById: build.query<any, number>({
      query: (id) => `/api/to-dos/${id}`,
      providesTags: ["toDoById"]
    }),
    deleteTodos: build.mutation<any, number>({
      query: (id) => ({
        url: `/api/to-dos?id=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ToDo"]
    }),
    deleteImgTodos: build.mutation<any, number>({
      query: (id) => ({
        url: `/api/to-dos/images/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ToDo"]

    }),
    ChangeStatus: build.mutation<any, any>({
      query: (id) => ({
        url: `/completed?id=${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["ToDo"]

    }),
    AddNewUser: build.mutation<any, any>({
      query: (formdata) => ({
        url: `/api/to-dos`,
        method: "POST",
        body: formdata,
      }),
      invalidatesTags: ["ToDo"]

    }),
    EditUser: build.mutation<any, any>({
      query: (obj) => ({
        url: `/api/to-dos?id=${obj.id}`,
        method: "PUT",
        body: obj,
      }),
      invalidatesTags: ["ToDo"]

    }),
    addTodosImg: build.mutation<any, any>({
      query: ({ formData, id }) => ({
        url: `/api/to-dos/${id}/images`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["ToDo"]
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
  useGetByIdQuery,
  useAddTodosImgMutation
} = TodoApi;
