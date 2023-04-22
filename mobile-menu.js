(() => {
  const refs = {
    openmenuBtn: document.querySelector("[data-menu-open]"),
    closemenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openmenuBtn.addEventListener("click", togglemenu);
  refs.closemenuBtn.addEventListener("click", togglemenu);
  refs.menu.addEventListener("click", (click) => {
    if (click.target === click.currentTarget) togglemenu();
  });
  function togglemenu() {
    refs.menu.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();
