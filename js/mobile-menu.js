(() => {
  const refs = {
    // Кнопка відкриття (бургер)
    openMenuBtn: document.querySelector('.js-open-menu'),
    // Кнопка закриття (хрестик)
    closeMenuBtn: document.querySelector('.js-close-menu'),
    // Саме меню (оверлей)
    menu: document.querySelector('.js-menu-container'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
    // Блокуємо прокрутку фону, коли меню відкрите
    document.body.classList.toggle('no-scroll');
  }
})();
