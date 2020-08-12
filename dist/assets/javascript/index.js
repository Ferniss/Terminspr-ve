"use strict";

function myFunction() {
  var x = document.getElementById("myLinks");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

fetch("http://localhost:4000/assets", {
  "method": "GET"
}).then(function (response) {
  return response.json();
}).then(function (data) {
  console.log(data);
  console.log(data[0]); // document.querySelector('.src').src = data.url

  var section1 = document.querySelector(".home_section-1");
  section1.innerHTML = "\n  <header>\n  <h1>WELCOME IN <br>NIGHT<span class=\"section1_header\">CLUB</span></psan></h1>\n  <img src=\"\" alt=\"\">\n</header>\n<figure>\n  <img src=\"assets/images/content-img/thumb1.jpg\" alt=\"\" class\"main_img\">\n  <img src=\"assets/images/content-img/reastaurant_1.jpg\" alt=\"\" class\"main_img\">\n  <img src=\"assets/images/content-img/thumb2.jpg\" alt=\"\" class\"main_img\">\n</figure>\n  ";
  var section2 = document.querySelector(".home_section-2");
  section2.innerHTML = "\n  <header>\n  <h1>EVENTS OF THE <br> MOTH</h1>\n  <img src=\"\" alt=\"\">\n</header>\n<figure>\n  <img src=\"assets/images/Logo.png\" alt=\"\">\n</figure>\n  ";
  var section3 = document.querySelector(".home_section-3");
  section3.innerHTML = "\n  <header>\n  <h1>NIGHTCLUB GALLERY</h1>\n  <img src=\"\" alt=\"\">\n</header>\n<figure>\n<img src=\"".concat(data[15].url, "\" alt=\"\">\n  <img src=\"").concat(data[16].url, "\" alt=\"\">\n  <img src=\"").concat(data[17].url, "\" alt=\"\">\n  <img src=\"").concat(data[18].url, "\" alt=\"\">\n  <img src=\"").concat(data[19].url, "\" alt=\"\">\n  <img src=\"").concat(data[20].url, "\" alt=\"\">\n  <img src=\"").concat(data[21].url, "\" alt=\"\">\n</figure>\n  ");
});