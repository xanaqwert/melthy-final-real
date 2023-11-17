/* <!-- *Gejala* -->
Ini adalah Javascript dari bagian/section Gejala
<!-- *__________________________Mulai Dari Bagian Gejala__________________________* -->
*/

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more ";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less ";
    moreText.style.display = "inline";
  }
}

var modal = document.getElementById("myModal");

//* Untuk button
var btn = document.getElementById("myBtn");

//* Untuk span
var span = document.getElementsByClassName("close")[0];

//* Untuk modal
function clickaja() {
  modal.style.display = "block";
}

//* Untuk Close button
span.onclick = function () {
  modal.style.display = "none";
};

//* Untuk Close Button
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var modal2 = document.getElementById("myModall");

//* Untuk Span
var span2 = document.getElementsByClassName("closee")[0];

//* Untuk Modal
function clickajaa() {
  modal2.style.display = "block";
}

//* Untuk Button
span2.onclick = function () {
  modal2.style.display = "none";
};

//* Untuk Button
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

var modal3 = document.getElementById("myModalll");

//* Untuk Span
var span3 = document.getElementsByClassName("closeee")[0];

//* Untuk Modal
function clickajaaa() {
  modal3.style.display = "block";
}

//* Untuk Buttonnya
span3.onclick = function () {
  modal3.style.display = "none";
};

//* Untuk Buttonnya
window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
};

var modal4 = document.getElementById("myModallll");


//* Untuk Modal
var span4 = document.getElementsByClassName("closeeee")[0];

//* Untuk Button
function clickajaaaa() {
  modal4.style.display = "block";
}

//* Untuk Span
span4.onclick = function () {
  modal4.style.display = "none";
};

//* Untuk Buttonnya
window.onclick = function (event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
};
//* Buat Tab Image

const tabOne = document.querySelector(".listen-music:nth-child(1)");
const tabTwo = document.querySelector(".listen-music:nth-child(2)");
const tabThree = document.querySelector(".listen-music:nth-child(3)");
const img = document.getElementById("gambar");

function setImageOne() {
  tabOne.addEventListener("mouseover", () => {
    img.src = "./assets/images/asset & emoji/img1.png";
  });
}
function setImageTwo() {
  tabTwo.addEventListener("mouseover", () => {
    img.src = "./assets/images/asset & emoji/img2.png";
  });
}
function setImageThree() {
  tabThree.addEventListener("mouseover", () => {
    img.src = "./assets/images/asset & emoji/img3.png";
  });
}
