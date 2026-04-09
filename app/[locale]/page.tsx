import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations();
  return <h1>{t('hallo')}</h1>;
}



