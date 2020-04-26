import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en-US', () => import('./en-US.json'));
register('pt-BR', () => import('./pt-BR.json'));

init({
  fallbackLocale: 'en-US',
  initialLocale: getLocaleFromNavigator(),
});
