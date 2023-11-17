/* <!-- *FAQ* -->
Ini adalah Javascript dari bagian/section FAQ
<!-- *__________________________Mulai Dari Bagian FAQ__________________________* -->
*/

const openElements = document.getElementsByClassName("open-faq");

//* Looping FAQ
for (let i = 0; i < openElements.length; i++) {
  openElements[i].addEventListener("click", function () {
    let container = this.closest(".topic-melthy");
    let answer = container.querySelector(".answer-melthy");
    let trigger = container.querySelector(".faq-arrow");

    answer.classList.toggle("show");

    trigger.classList.toggle("faq-o");

    container.classList.toggle("expanded");
  });
}
