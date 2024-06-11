import {getRequestConfig} from 'next-intl/server';
import LANGUAGES from '../utils/constants/languages';
 
export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = LANGUAGES.GREEK;
 
  return {
    locale,
    messages: (await import(`./${locale}.json`)).default
  };
});