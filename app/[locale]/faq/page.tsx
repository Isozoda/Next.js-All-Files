import Image from "next/image"
import image1 from "../../images/Vector 3.png"
import { useTranslations } from "next-intl"

const Page = () => {
  const t = useTranslations("faq");

  return (
    <div className="w-full m-auto">
      <div className="backgroundFaq1 w-full">
        <h1 className="font-black text-9xl mb-5 w-full">{t("title")}</h1>
        <Image className="mx-auto mt-4 w-12 md:w-auto" src={image1} alt="" />
      </div>
      <div className="background3 text-center pt-10 pb-32">
        <h1 className="font-bold text-5xl mb-12 text-white">{t("subtitle")}</h1>
        <div className="w-[80%] max-w-5xl mx-auto bg-[#1b1b1d] rounded-4xl p-6 md:px-12 md:py-8 text-left shadow-2xl flex flex-col">
          <details className="group w-full border-b border-white/10" open>
            <summary className="flex justify-between items-center cursor-pointer py-6 text-[22px] font-bold text-white group-open:text-[#ffb53d] list-none [&::-webkit-details-marker]:hidden">
              <span className="pr-10">{t("q1")}</span>
              <span className="transition-transform group-open:rotate-90 shrink-0">
                <svg className="w-7 h-7 stroke-white group-open:stroke-[#ffb53d]" viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </summary>
            <div className="pb-8 text-[#e2e8f0] text-[17px] font-medium pr-10">
              {t("a1")}
            </div>
          </details>
          <details className="group w-full border-b border-white/10" open>
            <summary className="flex justify-between items-center cursor-pointer py-6 text-[22px] font-bold text-white group-open:text-[#ffb53d] list-none [&::-webkit-details-marker]:hidden">
              <span className="">{t("q2")}</span>
              <span className="transition-transform group-open:rotate-90 shrink-0">
                <svg className="w-7 h-7 stroke-white group-open:stroke-[#ffb53d]" viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </summary>
            <div className="pb-8 text-[#e2e8f0] text-[17px] font-medium ">
              {t("a2")}
            </div>
          </details>
          <details className="group w-full border-b border-white/10" open>
            <summary className="flex justify-between items-center cursor-pointer py-6 text-[22px] font-bold text-white group-open:text-[#ffb53d] list-none [&::-webkit-details-marker]:hidden">
              <span className="">{t("q3")}</span>
              <span className="transition-transform group-open:rotate-90 shrink-0">
                <svg className="w-7 h-7 stroke-white group-open:stroke-[#ffb53d]" viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </summary>
            <div className="pb-8 text-[#e2e8f0] text-[17px] font-medium ">
              {t("a3")}
            </div>
          </details>
        </div>
      </div>
      <div className="backGroundFAQ">
        <div className="flex pt-15 items-center justify-between w-[80%] m-auto">
          <div className="">
            <h1 className="font-bold text-4xl mb-5" dangerouslySetInnerHTML={{ __html: t.raw("form_title") }}></h1>
            <p className="font-bold text-gray-400">{t("form_sub")}</p>
          </div>
          <div className="w-[30%]">
            <div className="flex flex-col gap-2 w-full">
              <input className="py-3 px-8 w-full bg-[#00000076]  text-white" type="text" placeholder="Ваше имя" />
              <input className="py-3 px-8 w-full bg-[#00000076]  text-white" type="text" placeholder="+48 (99) 999-99-99" />
              <button className="py-3 w-full bg-white text-black font-bold">Оставить заявку</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
