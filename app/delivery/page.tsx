import Image from "next/image"
import image1 from "../images/чат.png"
import image2 from "../images/Ellipse 313.png"
import motorImage from "../images/motor.png"

const Page = () => {
  return (
    <div className="w-full">
      <div className="backgroundDelivery1">
        <h1 className="text-5xl mb-12 font-bold">Стань курьером у нас <br />
          и зарабатывай от 300 злотых в день</h1>
        <div className="flex items-center gap-5 justify-center">
          <button className="bg-white text-black px-5 py-2 font-bold">Оставить заявку</button>
          <button className="px-5 py-2 border">Узнать больше</button>
        </div>
        <Image className="absolute top-130 left-320" src={image1} alt="" />
      </div>
      <div className="backgroundDelivery2 text-start pt-20">
        <div className="flex items-center justify-between w-[80%] m-auto ">
          <div className="bg-[#000000a5] py-11 px-12 rounded-4xl">
            <h1 className="text-3xl font-bold mb-4">Работая с нами Вы сохраняете все <br /> преимущества работы доставщика:</h1>
            <div className="flex text-start items-center mb-7">
              <Image src={image2} alt="" />
              <p className="font-bold">Все, что нужно это загран паспорт и права (если работа <br />
                в доставке на автомобиле)
              </p>
            </div>
            <div className="flex text-start items-center mb-7">
              <Image src={image2} alt="" />
              <p className="font-bold">Мы предоставляем автомобильные и ручные термосумки
              </p>
            </div>
            <div className="flex text-start items-center mb-8">
              <Image src={image2} alt="" />
              <p className="font-bold">Возможность работать как на автомобиле или велосипеде <br />
                за пределами компании.
              </p>
            </div>
            <div className="flex items-center gap-8">
              <button className="py-3 rounded-xl px-6 text-white bg-[#FFFFFF33] font-bold">Консультация</button>
              <p className="font-bold">Узнать больше</p>
            </div>
          </div>
          <Image src={motorImage} alt="" />
        </div>
      </div>
      <div className="background2 text-black pb-20 pt-15">
        <h1 className="text-4xl mb-12 pt-10 font-bold text-black">Преимущества для курьеров:</h1>
        <div className="max-w-5xl mx-auto px-5 py-10 mb-20 rounded-4xl grid backdrop-blur-md bg-gray-900 grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-5">
          <div className="flex flex-col items-center text-center">
            <div
              className="w-16 h-16 bg-[#2bd887] rounded-2xl flex items-center justify-center"
              style={{ boxShadow: '0 0 45px rgba(43, 216, 135, 0.45)' }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="12" x="3" y="6" rx="2"></rect>
                <circle cx="12" cy="12" r="2"></circle>
                <path d="M7 12h.01M17 12h.01"></path>
              </svg>
            </div>
            <p className="text-[#e2e8f0] text-[17px] leading-relaxed font-medium">
              <span className="text-white">Автоматическая</span> <b className="font-bold text-white">выплата</b><br />
              зарплаты <b className="font-bold text-white">каждые 24 часа</b>
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div
              className="w-16 h-16 bg-[#2bd887] rounded-2xl flex items-center justify-center"
              style={{ boxShadow: '0 0 45px rgba(43, 216, 135, 0.45)' }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <p className="text-[#e2e8f0] text-[17px] leading-relaxed font-medium">
              <span className="text-white">Рекомендованный</span> <b className="font-bold text-white">партнер</b><br />
              <span className="text-[#e2e8f0]">Uber, Bolt, Free Now</span>
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div
              className="w-16 h-16 bg-[#2bd887] rounded-2xl flex items-center justify-center"
              style={{ boxShadow: '0 0 45px rgba(43, 216, 135, 0.45)' }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 11h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l3-4v-2Z" />
              </svg>
            </div>
            <p className="text-[#e2e8f0] text-[17px] leading-relaxed font-medium">
              <span className="text-white">Техническая</span> <b className="font-bold text-white">поддержка</b><br />
              <b className="font-bold text-white">24/7</b> <span className="text-[#e2e8f0]">в онлайн-режиме</span>
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div
              className="w-16 h-16 bg-[#ffb53d] rounded-2xl flex items-center justify-center"
              style={{ boxShadow: '0 0 45px rgba(255, 181, 61, 0.45)' }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" x2="8" y1="13" y2="13" />
                <line x1="16" x2="8" y1="17" y2="17" />
                <line x1="10" x2="8" y1="9" y2="9" />
              </svg>
            </div>
            <p className="text-[#e2e8f0] text-[17px] leading-relaxed font-medium">
              <span className="text-white">Мы оплачиваем штрафы по</span><br />
              <b className="font-bold text-white">безналичным поездкам</b>
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div
              className="w-16 h-16 bg-[#ffb53d] rounded-2xl flex items-center justify-center"
              style={{ boxShadow: '0 0 45px rgba(255, 181, 61, 0.45)' }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
            </div>
            <p className="text-[#e2e8f0] text-[17px] leading-relaxed font-medium">
              <span className="text-white">До 2-ух рабочих дней</span><br />
              <span className="text-[#e2e8f0]">подключения на</span> <b className="font-bold text-white">флот водителя</b>
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div
              className="w-16 h-16 bg-[#ffb53d] rounded-2xl flex items-center justify-center"
              style={{ boxShadow: '0 0 45px rgba(255, 181, 61, 0.45)' }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <p className="text-[#e2e8f0] text-[17px] leading-relaxed font-medium">
              <span className="text-white">Являемся</span> <b className="font-bold text-white">единственным</b><br />
              <b className="font-bold text-white">гарантом</b> <span className="text-[#e2e8f0]">выплат на рынке</span>
            </p>
          </div>
        </div>
      </div>
      <div className="background3 text-center pt-5 pb-32">
        <h1 className="font-bold text-5xl mb-12 text-white">Частые вопросы</h1>
        <div className="w-[80%] max-w-5xl mx-auto bg-[#1b1b1d] rounded-4xl p-6 md:px-12 md:py-8 text-left shadow-2xl flex flex-col">
          <details className="group w-full border-b border-white/10" open>
            <summary className="flex justify-between items-center cursor-pointer py-6 text-[22px] font-bold text-white group-open:text-[#ffb53d] list-none [&::-webkit-details-marker]:hidden">
              <span className="pr-10">Какие требования к работе курьером?</span>
              <span className="transition-transform group-open:rotate-90 shrink-0">
                <svg className="w-7 h-7 stroke-white group-open:stroke-[#ffb53d]" viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
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
                  <path d="m9 18 6-6-6-6"/>
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
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </span>
            </summary>
            <div className="pb-8 text-[#e2e8f0] text-[17px] font-medium ">
              Мы предоставляем термосумку после прохождения регистрации и активации профиля курьера.
            </div>
          </details>
        </div>
      </div>
    </div>
  )
}

export default Page
