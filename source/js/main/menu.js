const menu = () => {
  const isClassNoJs = document.querySelector(`.main-header--no-js`);
  const siteNavigation = document.querySelector(`.main-header__nav`);
  const buttonMenu = document.querySelector(`.main-header__burger`);

  if (isClassNoJs) {
    buttonMenu.classList.add(`main-header__burger--close`);
    isClassNoJs.classList.remove(`main-header--no-js`);
    siteNavigation.classList.add(`main-header__nav--close`);
  }

  buttonMenu.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    buttonMenu.classList.toggle(`main-header__burger--close`);
    siteNavigation.classList.toggle(`main-header__nav--close`);

  });
};

export default menu();
