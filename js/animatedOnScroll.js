/* <!-- *Animated On Scroll* -->
Ini adalah Javascript dari bagian/section Animated On Scroll
<!-- *______________________Mulai Dari Bagian Animated On Sroll____________________* -->
*/

const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
  for (let i = 0, x = revealElements.length; i < x; i++) {
    if (
      revealElements[i].getBoundingClientRect().top <
      window.innerHeight / 1.2
    ) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
};

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);
