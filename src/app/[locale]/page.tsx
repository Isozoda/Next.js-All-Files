import Image from "next/image"
import image1 from "../images/1.png"
import image2 from "../images/Container (3).png"
import image3 from "../images/Container (5).png"
import image4 from "../images/2.png"
import image5 from "../images/3.png"

import imageIcon from "../images/Icon (1).png"
import imageIcon1 from "../images/Icon (2).png"
import imageIcon3 from "../images/Overlay.png"

import "../globals.css"
import { getTranslations } from "next-intl/server"

const Page = async () => {
  const t = await getTranslations("HomePage");
  return (
    <div className="mt-10">
      <section className="flex w-[90%] m-auto items-center justify-between py-20">
        <div className="max-w-2xl">
          <span className="text-[#4EDEA3] px-4 py-1 bg-[#002113] mb-8 inline-block rounded-full text-xs font-bold tracking-widest uppercase">{t("established")}</span>
          <h1 className="text-[#000000] text-8xl mb-10 font-bold leading-tight tracking-tighter">
            {t.rich("hero.title", {
              br: () => <br />
            })}
          </h1>
          <p className="mb-12 text-[#45464D] font-medium text-xl leading-relaxed max-w-lg">
            {t("hero.description")}
          </p>
          <div className="flex items-center gap-6">
            <button className="bg-gray-900 py-5 px-10 rounded-xl text-white font-bold hover:bg-black transition-colors shadow-lg">
              {t("hero.viewPortfolio")}
            </button>
            <button className="bg-white border border-gray-200 py-5 px-10 rounded-xl text-[#57657B] font-bold hover:bg-gray-50 transition-colors shadow-sm">
              {t("hero.ourProcess")}
            </button>
          </div>
        </div>
        <div className="relative">
          <Image src={image1} alt="Hero Image" className="rounded-2xl shadow-2xl" />
          <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl max-w-xs hidden xl:block">
            <p className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">{t("hero.featuredWork")}</p>
            <h3 className="text-xl font-bold text-gray-900">{t("hero.featuredTitle")}</h3>
          </div>
        </div>
      </section>

      <section className="bg-white py-32 px-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#000000] font-bold mb-6 text-4xl tracking-tight">{t("expertise.title")}</h2>
          <p className="text-[#45464D] font-medium text-xl mb-24 max-w-2xl">
            {t("expertise.description")}
          </p>
          
          <div className="grid grid-cols-12 gap-10 mb-10">
            <div className="col-span-12 lg:col-span-7 bg-[#F9FAFB] p-16 rounded-3xl group hover:bg-[#F2F4F6] transition-all duration-500">
              <div className="bg-white w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <Image src={imageIcon} alt="Icon" />
              </div>
              <h3 className="mb-6 text-[#191C1E] font-bold text-3xl">{t("expertise.spatial.title")}</h3>
              <p className="text-[#45464D] font-medium text-lg leading-relaxed mb-12 max-w-md">
                {t("expertise.spatial.description")}
              </p>
              <p className="text-[#4EDEA3] font-bold tracking-widest hover:translate-x-2 transition-transform cursor-pointer inline-block">
                {t("expertise.spatial.link")}
              </p>
            </div>
            
            <div className="col-span-12 lg:col-span-5 bg-[#131B2E] text-white p-16 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="bg-[#1F2937] w-16 h-16 rounded-2xl flex items-center justify-center mb-10">
                  <Image src={imageIcon1} alt="Icon" />
                </div>
                <h3 className="text-3xl font-bold mb-6">{t("expertise.editorial.title")}</h3>
                <p className="text-[#7C839B] text-lg font-medium leading-relaxed">
                  {t("expertise.editorial.description")}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-5 bg-[#6FFBBE] text-black p-16 rounded-3xl flex flex-col justify-between">
              <div>
                <h3 className="mb-6 text-[#191C1E] font-bold text-3xl">{t("expertise.engineering.title")}</h3>
                <p className="text-[#005236] font-semibold text-lg leading-relaxed mb-12">
                  {t("expertise.engineering.description")}
                </p>
              </div>
              <div className="self-end">
                <Image className="mb-4" src={imageIcon3} alt="" />
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7 bg-[#F9FAFB] p-16 rounded-3xl group hover:bg-[#F2F4F6] transition-all duration-500 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">{t("innovation")}</h3>
              <div className="h-1 w-20 bg-[#6FFBBE] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAFB] py-32 px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-24 justify-between">
            <h2 className="text-[#000000] font-bold text-5xl tracking-tight leading-tight">
              {t.rich("testimonials.title", {
                br: () => <br />
              })}
            </h2>
            <Image src={image2} alt="" className="opacity-40" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-16 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-500">
              <Image src={image3} alt="" className="mb-10" />
              <blockquote className="text-[#000000] font-bold mb-12 text-2xl leading-snug">
                {t("testimonials.quote1.text")}
              </blockquote>
              <div className="flex gap-5 items-center">
                <Image className="rounded-full shadow-md" src={image4} alt="" width={64} height={64} />
                <div>
                  <p className="text-[#191C1E] font-bold text-xl">{t("testimonials.quote1.author")}</p>
                  <p className="text-[#64748B] font-semibold">{t("testimonials.quote1.role")}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-16 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-500">
              <Image src={image3} alt="" className="mb-10" />
              <blockquote className="text-[#000000] font-bold mb-12 text-2xl leading-snug">
                {t("testimonials.quote2.text")}
              </blockquote>
              <div className="flex gap-5 items-center">
                <Image className="rounded-full shadow-md" src={image5} alt="" width={64} height={64} />
                <div>
                  <p className="text-[#191C1E] font-bold text-xl">{t("testimonials.quote2.author")}</p>
                  <p className="text-[#64748B] font-semibold">{t("testimonials.quote2.role")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="backImage w-full text-white text-center py-40 relative overflow-hidden flex flex-col items-center">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 max-w-4xl px-10">
          <h2 className="text-8xl font-black mb-10 tracking-tighter">{t("cta.title")}</h2>
          <p className="text-2xl font-medium mb-12 text-gray-200">
            {t("cta.description")}
          </p>
          <button className="text-black bg-[#6FFBBE] font-bold py-6 px-16 rounded-2xl text-xl hover:bg-white hover:scale-105 transition-all shadow-2xl">
            {t("cta.button")}
          </button>
        </div>
      </section>
    </div>
  )
}

export default Page
