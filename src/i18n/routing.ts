import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['en', 'ru','tj'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});