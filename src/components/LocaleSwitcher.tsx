"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLocale = localStorage.getItem("app_locale");
    if (savedLocale && savedLocale !== locale && ['en', 'ru', 'tj'].includes(savedLocale)) {
      const parts = pathname.split('/');
      if (['en', 'ru', 'tj'].includes(parts[1])) {
        parts[1] = savedLocale;
      } else {
        parts.splice(1, 0, savedLocale);
      }
      router.push(parts.join('/') || '/');
    }
  }, [locale, pathname, router]);

  const handleLocaleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    localStorage.setItem("app_locale", newLocale);
    
    // Replace the current locale in the URL path
    const parts = pathname.split('/');
    if (['en', 'ru', 'tj'].includes(parts[1])) {
        parts[1] = newLocale;
    } else {
        parts.splice(1, 0, newLocale);
    }
    const newPath = parts.join('/') || '/';
    router.push(newPath);
  };

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <select
      value={locale}
      onChange={handleLocaleChange}
      className="bg-transparent text-white font-bold cursor-pointer outline-none ml-4"
    >
      <option value="en" className="text-black">EN</option>
      <option value="ru" className="text-black">RU</option>
      <option value="tj" className="text-black">TJ</option>
    </select>
  );
}
