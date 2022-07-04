(() => {
  const refs = {
    body: document.body,
    openMenuBtn: document.querySelector(".menu-mob__open-btn"),
    closeMenuBtn: document.querySelector(".menu-mob__close-btn"),
    menu: document.querySelector(".menu-mob"),
  };
  console.log(refs);
  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.body.classList.toggle("no-scroll");
    refs.menu.classList.toggle("is-hidden");
  }
})();
