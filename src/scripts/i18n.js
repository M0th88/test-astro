import i18next from 'i18next';
import i18nextHttpBackend from 'i18next-http-backend';
import i18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

async function initializeI18next() {
  await i18next
    .use(i18nextHttpBackend)
    .use(i18nextBrowserLanguageDetector)
    .init({
      backend: { loadPath: '/locales/{{lng}}.json' },
      fallbackLng: 'es',
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage']
      }
    });

  const updateContent = () => {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = i18next.t(key);
      if (['INPUT', 'TEXTAREA'].includes(element.tagName)) {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    });
    document.documentElement.lang = i18next.language;
    updateLangUI(i18next.language);
  };

  const updateLangUI = (lang) => {
    const isEs = lang.startsWith('es');
    const flagSrc = isEs ? '/images/es.png' : '/images/gb.png';
    const text = isEs ? 'ES' : 'EN';
    document.querySelectorAll('#lang-flag, #lang-flag-mobile').forEach(el => el.src = flagSrc);
    document.querySelectorAll('#lang-text, #lang-text-mobile').forEach(el => el.textContent = text);
  };

  const langToggles = document.querySelectorAll('#lang-toggle, #lang-toggle-mobile');
  langToggles.forEach(button => {
    button.addEventListener('click', () => {
      const newLang = i18next.language.startsWith('es') ? 'en' : 'es';
      i18next.changeLanguage(newLang);
    });
  });

  updateContent();
  i18next.on('languageChanged', updateContent);
}

// Inicia todo el motor de traducción.
initializeI18next();