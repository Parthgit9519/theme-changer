let btn = document.querySelector("#themeToggle");

btn.addEventListener("click", function () {
  function dol() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.toggle("dark");
    }
  }
  dol();
});
