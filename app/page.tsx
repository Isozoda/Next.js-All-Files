"use client"
import { useState } from "react"
import { useAddNewUserMutation, useAddTodosImgMutation, useChangeStatusMutation, useDeleteImgTodosMutation, useDeleteTodosMutation, useEditUserMutation, useGetTodosQuery } from "./api/todo"
import { IData, IImage } from "./types/todoType"
import { Button, Modal } from "antd"
import { useForm } from 'react-hook-form'
import Link from "next/link"

export const apiImage = "http://37.27.29.18:8001/images"

const Page = () => {
  const { data, refetch, isFetching }: any = useGetTodosQuery(null)
  const [deleteUser] = useDeleteTodosMutation()
  const [deleteImage] = useDeleteImgTodosMutation()
  const [changeSatus] = useChangeStatusMutation()
  const [addUser] = useAddNewUserMutation()
  const [editUser] = useEditUserMutation()
  const [addIMagee] = useAddTodosImgMutation()

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [isModalOpenE, setIsModalOpenE] = useState(false);

  const showModalE = () => {
    setIsModalOpenE(true);
  };

  const handleOkE = () => {
    setIsModalOpenE(false);
  };

  const handleCancelE = () => {
    setIsModalOpenE(false);
  };

  const [isModalOpenmage, setIsModalOpenmage] = useState(false);

  const showModalmage = () => {
    setIsModalOpenmage(true);
  };

  const handleOkmage = () => {
    setIsModalOpenmage(false);
  };

  const handleCancelmage = () => {
    setIsModalOpenmage(false);
  };

  const [idx, setIdx] = useState(null)

  const { register, handleSubmit, reset, setValue } = useForm()

  const onSubmit = (data: any) => {
    let form = new FormData()
    form.append("Name", data.name)
    form.append("Description", data.description)

    for (let i = 0; i < data.file.length; i++) {
      form.append("Images", data.file[i])
    }

    if (idx) {
      editUser({
        id: idx,
        name: data.name,
        description: data.description
      })
      handleCancelE()
      reset()
    } else {
      addUser(form)
      handleCancel()
      reset()
    }
  }

  const onsubmitIMage = (data: any) => {
    let form = new FormData()
    addIMagee({ formData: form, id: idx })
    for (let i = 0; i < data.file.length; i++) {
      form.append("Images", data.file[i])
    }
    handleCancelmage()
    reset()
  }

  function handleEdit(user: any) {
    setIdx(user.id)
    setValue("name", user.name)
    setValue("description", user.description)
  }

  return (
    <div className="w-[85%] m-auto my-10 mb-10 font-sans">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          Users Card
        </h1>
        <Button type="primary" onClick={showModal}>+ Add New User</Button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-10">
        {data?.data?.map((e: IData) => (
          <div key={e.id} className="bg-white shadow-2xl rounded-xl overflow-hidden hover:border-gray-300 transition-colors">
            <div className="w-full bg-gray-50 flex items-center justify-center relative overflow-hidden">
              {e.images?.slice(0, 1).map((img: IImage) => (
                <div key={img.id}>
                  <img
                    className="w-full h-50 object-cover"
                    src={`${apiImage}/${img.imageName}`}
                    alt=""
                  />
                  <Button className="my-3" onClick={() => deleteImage(img.id)} >
                    DlImg
                  </Button>
                </div>
              ))}
            </div>
            <Button className="m-3" type="primary" onClick={() => {
              showModalmage()
              setIdx(e.id)
            }}>Add Img</Button>
            <div className="p-4">
              <p className="text-[15px] font-semibold text-gray-900 mb-1">Name: {e.name}</p>
              <p className="text-[13px] text-gray-500 mb-3 leading-relaxed">Description: {e.description}</p>

              {e.isCompleted && (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-green-50 text-green-700 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Active
                </span>
              )}
              {!e.isCompleted && (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-red-50 text-red-600 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  InActive
                </span>
              )}

              <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
                <div className="flex gap-2">
                  <button
                    onClick={() => deleteUser(e.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-red-50 hover:border-red-200 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#E24B4A" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </button>
                  <button onClick={() => {
                    showModalE()
                    handleEdit(e)
                  }} className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#378ADD" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                  </button>
                </div>
                <Link href={`/${e.id}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </Link>
                <input onChange={() => changeSatus(e.id)} type="checkbox" checked={e.isCompleted} className="w-4 h-4 accent-green-600 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        title="Add Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <input className="w-full border border-gray-300 rounded-lg p-2" type="text" {...register("name")} placeholder="Name" />
          <input className="w-full border border-gray-300 rounded-lg p-2" type="text" {...register("description")} placeholder="Description" />
          <input className="w-full border border-gray-300 rounded-lg p-2" type="file" {...register("file")} multiple />
          <button className="w-full bg-blue-500 text-white rounded-lg p-2" type="submit">Add</button>
        </form>
      </Modal>

      <Modal
        title="Add IMage"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpenmage}
        onOk={handleOkmage}
        onCancel={handleCancelmage}
        footer={null}
      >
        <form onSubmit={handleSubmit(onsubmitIMage)} className="flex flex-col gap-3">
          <input className="w-full border border-gray-300 rounded-lg p-2" type="file" {...register("file")} multiple />
          <button className="w-full bg-blue-500 text-white rounded-lg p-2" type="submit">Add Image</button>
        </form>
      </Modal>

      <Modal
        title="Edit Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpenE}
        onOk={handleOkE}
        onCancel={handleCancelE}
        footer={null}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <input className="w-full border border-gray-300 rounded-lg p-2" type="text" {...register("name")} placeholder="Name" />
          <input className="w-full border border-gray-300 rounded-lg p-2" type="text" {...register("description")} placeholder="Description" />
          <button className="w-full bg-blue-500 text-white rounded-lg p-2" type="submit">Ubdate</button>
        </form>
      </Modal>

    </div>
  )
}

export default Page