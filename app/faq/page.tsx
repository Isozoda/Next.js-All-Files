import Image from "next/image"
import image1 from "../images/Vector 3.png"

const Page = () => {
  return (
    <div className="w-full">
      <div className="backgroundFaq1">
        <h1 className="font-black text-9xl mb-20">FAQ</h1>
        <Image className="ml-180" src={image1} alt="" />
      </div>
      <div className="background3 text-center pt-10 pb-32">
        <h1 className="font-bold text-5xl mb-12 text-white">Частые вопросы</h1>
        <div className="w-[80%] max-w-5xl mx-auto bg-[#1b1b1d] rounded-4xl p-6 md:px-12 md:py-8 text-left shadow-2xl flex flex-col">
          <details className="group w-full border-b border-white/10" open>
            <summary className="flex justify-between items-center cursor-pointer py-6 text-[22px] font-bold text-white group-open:text-[#ffb53d] list-none [&::-webkit-details-marker]:hidden">
              <span className="pr-10">Какие требования к работе курьером?</span>
              <span className="transition-transform group-open:rotate-90 shrink-0">
                <svg className="w-7 h-7 stroke-white group-open:stroke-[#ffb53d]" viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </summary>
            <div className="pb-8 text-[#e2e8f0] text-[17px] font-medium pr-10">
              Все что нужно, это Ваш загранпаспорт и права ( в случае доставки на автомобиле)
            </div>
          </details>
          <details className="group w-full border-b border-white/10" open>
            <summary className="flex justify-between items-center cursor-pointer py-6 text-[22px] font-bold text-white group-open:text-[#ffb53d] list-none [&::-webkit-details-marker]:hidden">
              <span className="">Обязателен ли автомобиль для работы в доставке?</span>
              <span className="transition-transform group-open:rotate-90 shrink-0">
                <svg className="w-7 h-7 stroke-white group-open:stroke-[#ffb53d]" viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </summary>
            <div className="pb-8 text-[#e2e8f0] text-[17px] font-medium ">
              Нет, вы можете использовать велосипед, скутер или наши авто, а также работать пешком в определенных зонах.
            </div>
          </details>
          <details className="group w-full border-b border-white/10" open>
            <summary className="flex justify-between items-center cursor-pointer py-6 text-[22px] font-bold text-white group-open:text-[#ffb53d] list-none [&::-webkit-details-marker]:hidden">
              <span className="">Где мне взять сумку для доставки?</span>
              <span className="transition-transform group-open:rotate-90 shrink-0">
                <svg className="w-7 h-7 stroke-white group-open:stroke-[#ffb53d]" viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </summary>
            <div className="pb-8 text-[#e2e8f0] text-[17px] font-medium ">
              Мы предоставляем термосумку после прохождения регистрации и активации профиля курьера.
            </div>
          </details>
        </div>
      </div>
      <div className="backGroundFAQ">
        <div className="flex pt-15 items-center justify-between w-[80%] m-auto">
          <div className="">
            <h1 className="font-bold text-4xl mb-5">Все еще остались вопросы, <br />
              на которые не нашлись <br />
              здесь ответы?</h1>
            <p className="font-bold text-gray-400">Оставляй заявку и наш менеджер перезвонит и ответит</p>
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
