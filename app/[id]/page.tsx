"use client"

import { useParams } from "next/navigation"
import { useGetByIdQuery } from "../api/todo"
import { apiImage } from "../page"

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Autoplay } from "swiper/modules"

const Page = () => {
  const { id }: any = useParams()
  const { data } = useGetByIdQuery(id)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden">
        
        {/* 🔥 IMAGE SLIDER */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          className="w-full h-[300px]"
        >
          {data?.data?.images?.map((e: any) => (
            <SwiperSlide key={e.id}>
              <img
                src={`${apiImage}/${e.imageName}`}
                alt=""
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 🔥 CONTENT */}
        <div className="p-6 space-y-4">
          
          <h1 className="text-2xl font-bold text-gray-800">
            {data?.data?.name}
          </h1>

          <p className="text-gray-600 leading-relaxed">
            {data?.data?.description}
          </p>

          {/* 🔥 EXTRA INFO BLOCK */}
          <div className="flex gap-4 mt-4">
            <div className="bg-gray-100 px-4 py-2 rounded-xl text-sm">
              ID: {data?.data?.id}
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-xl text-sm">
              Images: {data?.data?.images?.length}
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Page