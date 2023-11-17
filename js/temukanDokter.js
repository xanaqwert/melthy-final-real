function explore() {
  var element = document.getElementById("explore");
  var itemz = document.querySelectorAll(".itemz");
  var column = document.querySelector(".left-find-nav");
  // column.style.flexDirection = "column";

  // itemz[0].style.display = "block";
  // itemz[1].style.display = "block";
  // itemz[2].style.display = "block";

  if (column.style.flexDirection === "row") {
    column.style.flexDirection = "column";

    itemz[0].style.display = "block";
    itemz[1].style.display = "block";
    itemz[2].style.display = "block";
  } else if (column.style.flexDirection === "column") {
    column.style.flexDirection = "row";
    itemz[0].style.display = "none";
    itemz[1].style.display = "none";
    itemz[2].style.display = "none";
  } else {
    column.style.flexDirection = "column";
    itemz[0].style.display = "flex";
    itemz[1].style.display = "flex";
    itemz[2].style.display = "flex";
  }
  // for (i = 0; i < itemz.length; ++i) {
  //   itemz[i].style.display = "block";
  // }

  // if (column.style.flexDirection === "row") {
  //   element.classList.add("column-explore");
  // } else {
  //   itemz.style.display = "none";
  // }
}
// var header = document.getElementById("explore");
// var btns = header.getElementsByClassName("gg");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
