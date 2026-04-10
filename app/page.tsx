"use client"
import axios from "axios"
import { useEffect, useState } from "react"

const api = "http://37.27.29.18:8001/api/to-dos"
const apiImage = "http://37.27.29.18:8001/images"
const apiCheck = "http://37.27.29.18:8001/completed"


const Page = () => {

  let [data, setData] = useState([])

  let GetUser = async () => {
    try {
      let { data } = await axios.get(api)
      setData(data.data)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    GetUser()
  }, [])

  //delete

  const DeleteUser = async (id: number) => {
    try {
      await axios.delete(`${api}?id=${id}`)
      GetUser()
    } catch (error) {
      console.error(error);
    }
  }

  // deleteImage

  const DeleteImage = async (id: number) => {
    try {
      await axios.delete(`${api}/images/${id}`)
      GetUser()
    } catch (error) {
      console.error(error);
    }
  }

  // edit

  const EditUser = async (obj: any) => {
    try {
      await axios.put(`${apiCheck}?id=${obj.id}`, obj)
      GetUser()
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="grid grid-cols-3 gap-5 w-[80%] m-auto my-10">
      {data.map((e: any) => {
        return <div className="w-50 text-center border p-3">
          {e.images?.map((img: any) => {
            return <div>
              <img className="w-full h-50 mb-2" src={`${apiImage}/${img.imageName}`} alt="" />
              <button className="border" onClick={() => DeleteImage(img.id)}>DelImg</button>
            </div>
          })}
          <h1>Name: {e.name}</h1>
          <h1>Description: {e.description}</h1>
          {e.isCompleted && (
            <p className="text-green-500 font-bold">Active</p>
          )}
          {!e.isCompleted && (
            <p className="text-red-500 font-bold">Inactive</p>
          )}
          <div className="flex items-center gap-2 justify-center">
            <svg onClick={() => DeleteUser(e.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
            <input checked={e.isCompleted} onChange={() => EditUser({...e, status: !e.isCompleted})} type="checkbox" />
          </div>
        </div>
      })}
    </div>
  )
}

export default Page
