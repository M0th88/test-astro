document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('lang-toggle');
  const flag = document.getElementById('lang-flag');
  const text = document.getElementById('lang-text');
  const menuItems = [
    // { selector: 'a[href="#inicio"]', ES: 'Servicios', EN: 'Services' },
    { selector: 'a[href="#planes"]', ES: 'Planes', EN: 'Plans' },
    { selector: 'a[href="#cobertura"]', ES: 'Cobertura', EN: 'Coverage' },
    { selector: 'a[href="#contacto"]', ES: 'Contacto', EN: 'Contact' }
  ];

  let lang = 'EN';

  btn.addEventListener('click', () => {
    lang = lang === 'EN' ? 'ES' : 'EN';
    text.textContent = lang;
    flag.src = lang === 'EN' ? '/public/images/gb.png' : '/public/images/es.png';
    flag.alt = lang === 'EN' ? 'UK flag' : 'Spain flag';
    menuItems.forEach(item => {
      const link = document.querySelector(item.selector);
      if (link) link.childNodes[0].nodeValue = item[lang];
    });
  });
});