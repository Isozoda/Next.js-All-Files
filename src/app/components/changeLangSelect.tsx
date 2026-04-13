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
        <select value={locale} onChange={handelLangChange} name="" id="">
            <option value="en">English</option>
            <option value="ru">Russia</option>
            <option value="tj">Tajik</option>
        </select>

    </div>
}