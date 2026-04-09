"use client"

import { useParams } from "next/navigation"
import { usePathname, useRouter } from "../i18n/navigation"


const ChangeSelect = () => {
    const { locale } = useParams()
    const pathName = usePathname()
    const router = useRouter()

    const handleLangChange = (event: any) => {
        router.push(
            pathName,
            { locale: event.target.value }
        )
    }

    return (
        <div>
            <select value={locale} onChange={handleLangChange} className="">
                <option value="en">English</option>
                <option value="ru">Русский</option>
                <option value="tj">Тоҷикӣ</option>
            </select>
        </div>
    )
}

export default ChangeSelect