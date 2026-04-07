import "./globals.css";
import Image from "next/image";
import image2 from "./images/2 айфонс 1.png"
import image3 from "./images/Rectangle 65 (1).png"
import image4 from "./images/Rectangle 38.png"
import image5 from "./images/Group 16.png"
import image6 from "./images/audi-uber 1.png"
import image7 from "./images/Ellipse 314.png"
import image8 from "./images/image 280.png"
import image9 from "./images/image 279.png"
import image10 from "./images/image 251.png"
import image11 from "./images/Group 79.png"

const Page = () => {
  return (
    <div className="w-full">
      <div className="background">
        <h1 className="text-5xl mb-7">Подключайтесь к такси в Польше <br />
          с ежедневным стабильным заработком!</h1>
        <p className="text-xl mb-10">Ежедневные выплаты стали реальными вместе с Cleo Partner</p>
        <div className="flex items-center gap-5 justify-center">
          <button className="bg-white text-black px-5 py-2 font-bold">Оставить заявку</button>
          <button className="px-5 py-2 border">Узнать больше</button>
        </div>
      </div>
      <div className="flex py-10 px-20 pr-50 m-auto bg-gray-800 text-white items-center justify-between">
        <div>
          <Image src={image2} alt="" />
        </div>
        <div>
          <h1 className="text-5xl font-bold">О нашей компании</h1>
          <p className="text-xl mt-5">Компания Cleo Partners <br /> предлагает Вам комплексное <br /> сотрудничество на платформах <br /> Uber, Bolt, Free Now, Uber Eats, <br /> Bolt Food.</p>
          <p className="mt-5">С нами уже работают более 2000 довольных водителей <br /> по всей Польше, которые ежедневно зарабатывают.</p>
        </div>
      </div>
      <div className="flex py-15 px-20 pr-50 m-auto bg-gray-800 text-white items-center justify-between">
        <div>
          <h1 className="text-3xl mb-10 font-bold">Работая с нами Вы сохраняете <br /> все преимущества водителя <br /> такси</h1>
          <p className="mb-5">Вы имеете возможность самостоятельно устанавливать <br /> рабочий график и получать заработанные деньги <br /> ежедневно.</p>
          <p className="mb-5">Всего 4 документа разделяют вас от обычного <br /> человека и работника нашей компании. </p>
          <p className="mb-10">Работать можно на собственном или арендованном <br /> автомобиле из нашего автопарка, либо из автопарка  <br />
            за пределами компании.</p>
          <div className="flex items-center gap-5">
            <button className="py-3 rounded-xl px-10 bg-[#FFFFFF33] text-white font-bold">Консультация</button>
            <button className="font-bold border py-2.5 rounded-xl px-10">Узнать больше</button>
          </div>
        </div>
        <div>
          <Image src={image3} alt="" />
        </div>
      </div>
      <div className="background2 text-black pb-50">
        <h1 className="text-4xl mb-12 pt-10 font-bold text-black">Наши преимущества</h1>
        <div className="max-w-5xl mx-auto px-8 py-15 mb-20 rounded-4xl grid backdrop-blur-md bg-gray-900 grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8">
          <div className="flex flex-col items-center text-center">
            <div
              className="w-16 h-16 bg-[#2bd887] rounded-2xl flex items-center justify-center mb-6"
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
              className="w-16 h-16 bg-[#2bd887] rounded-2xl flex items-center justify-center mb-6"
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
              className="w-16 h-16 bg-[#2bd887] rounded-2xl flex items-center justify-center mb-6"
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
              className="w-16 h-16 bg-[#ffb53d] rounded-2xl flex items-center justify-center mb-6"
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
              className="w-16 h-16 bg-[#ffb53d] rounded-2xl flex items-center justify-center mb-6"
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
              className="w-16 h-16 bg-[#ffb53d] rounded-2xl flex items-center justify-center mb-6"
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
      <div className="background3">
        <h1 className="text-5xl mb-12 pt-12 font-bold text-black">Отзывы от наших водителей</h1>
        <div className="flex items-center justify-between w-[65%] m-auto rounded-4xl bg-gray-900 text-white p-18">
          <div className="">
            <Image className="mb-10" src={image4} alt="" />
            <Image className="ml-20" src={image5} alt="" />
          </div>
          <div className="w-[50%] text-start">
            <p className="font-bold mb-5">Несколько месяцев назад, я стал водителем компании Cleo Partners. Ребята очень молодые и упорные. Сначала я отнесся с недоверием, так как стоимость аренды, как мне казалось, была несколько высокой. </p>
            <p className="font-bold mb-5">Но, через месяц я понял, что все имеет свою цену. Результаты, которые дали в короткий срок, 2 месяца, меня удивили. Все четко, прозрачно, развернутые отчеты и контроль бизнес-процессов. В плане организации, если и возникали какие-то вопросы,  то все решали в течении считанных минут или часов.</p>
            <h1 className="font-bold text-3xl mb-2">Юрий Филионов</h1>
            <p className="text-gray-600 font-bold text-lg">Водитель в сети Uber</p>
          </div>
        </div>
      </div>
      <div className="background4">
        <h1 className="text-5xl mb-15 pt-12 font-bold text-black">Требования к автомобилю</h1>
        <div className="flex items-center gap-100 justify-between w-[80%] m-auto">
          <Image className="w-160" src={image6} alt="" />
          <div className="">
            <div className="flex mb-5 items-center gap-3">
              <Image className="" src={image7} alt="" />
              <p className="text-start font-bold text-xl">Авто должно быть 4-х дверное, <br /> леворульное.</p>
            </div>
            <div className="flex mb-5 items-center gap-3">
              <Image className="" src={image7} alt="" />
              <p className="text-start font-bold text-xl">Для работы в сервисе Bolt нужно: <br />
                — Авто от 2001 года
              </p>
            </div>
            <div className="flex mb-5 items-center gap-3">
              <Image className="" src={image7} alt="" />
              <p className="text-start font-bold text-xl">Для работы в сервисе Uber, Free Now нужно: <br />
                — Авто от 2006 года
              </p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <Image src={image8} alt="" />
              <Image src={image9} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="background5">
        <div className="flex mb-18 items-center justify-between w-[80%] m-auto">
          <div className="text-start">
            <h1 className="mb-3 font-bold pt-10 text-4xl">Присоединяйся к нашей <br /> службе такси и начинай <br /> зарабатывать прямо сейчас! </h1>
            <p className="font-bold text-gray-500">Оставляй заявку для сотрудничества с Cleo Partners</p>
          </div>
          <div className="w-[30%] pt-5">
            <form className="flex flex-col">
              <input className="font-bold text-white px-7 bg-[#00000033] py-3 w-full" type="text" placeholder="Ваше имя" />
              <input className="font-bold text-white px-7 bg-[#00000033] py-3 w-full" type="tel" placeholder="+48 (99) 999-99-99" />
              <button className="py-3 w-full bg-white text-black font-bold ">Оставить заявку</button>
            </form>
          </div>
        </div>
        <h1 className="font-bold text-white text-4xl ">Мы уже работаем в таких городах:</h1>
      </div>
      <div className="w-full">
        <Image className="w-full" src={image10} alt="" />
      </div>
    </div>
  )
}

export default Page
