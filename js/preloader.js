/* <!-- *Preloader* -->
Ini adalah Javascript dari bagian/section preloader
<!-- *__________________________Mulai Dari Bagian preloader__________________________* -->
*/
const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", () => {
  preloader.classList.add("remove");
});
