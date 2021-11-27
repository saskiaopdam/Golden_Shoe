const showMenu = () => {
  const slide = document.getElementById("slide-menu");
  slide.classList.add("slide-menu-open");
};

const closeMenu = () => {
  const slide = document.getElementById("slide-menu");
  slide.classList.remove("slide-menu-open");
};

const toggleSearchfield = () => {
  const navbarBottom = document.getElementById("navbar-bottom");
  navbarBottom.classList.toggle("navbar-bottom-displayed");

  const main = document.getElementById("main");
  main.classList.toggle("main-bigger-margin");
};
