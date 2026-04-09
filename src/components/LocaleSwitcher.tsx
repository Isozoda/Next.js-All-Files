"use client"
import { usePathname, useRouter } from '@/src/i18n/navigation';
import { useParams } from 'next/navigation';

export default function SelectLang() {
  const { locale } = useParams()
  const pathname = usePathname()
  console.log(pathname);

  const router = useRouter()

  const handelLangChange = (event: any) => {
    router.push(
      pathname,
      { locale: event.target.value }
    )
  }
  return <div>
    <select
      value={locale}
      onChange={handelLangChange}
      className="
        bg-white/20
        backdrop-blur-lg
        border border-white/30
        text-white
        rounded-2xl
        px-5 py-2
        shadow-lg
        outline-none
        hover:bg-white/30
        transition
        cursor-pointer
    "
    >
      <option value="en" className="text-black">English</option>
      <option value="ru" className="text-black">Русский</option>
      <option value="tj" className="text-black">Тоҷикӣ</option>
    </select>
  </div>
}