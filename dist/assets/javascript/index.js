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
  section1.innerHTML = "\n  <header>\n  <h1>WELCOME IN <br>NIGHT<span class=\"section1_header\">CLUB</span></psan></h1>\n  <img src=\"\" alt=\"\">\n</header>\n<figure class=\"home_figure-1\">\n  <img src=\"assets/images/content-img/thumb1.jpg\" alt=\"\" class\"main_img\">\n  <img src=\"assets/images/content-img/reastaurant_1.jpg\" alt=\"\" class\"main_img\">\n  <img src=\"assets/images/content-img/thumb2.jpg\" alt=\"\" class\"main_img\">\n</figure>\n  ";
  var section2 = document.querySelector(".home_section-2");
  section2.innerHTML = "\n  <header>\n  <h1>EVENTS OF THE <br> MONTH</h1>\n  <img src=\"\" alt=\"\">\n</header>\n<figure>\n  <img src=\"".concat(data[8].url, "\" alt=\"\">\n  <figcaption>25 Dec  10:30 PM  City Plaza, Newyork</figcaption>\n</figure>\n<section class=\"events\">\n<div class=\"event\" id=\"1\"></div>\n<div class=\"event\" id=\"2\"></div>\n<div class=\"event\" id=\"3\"></div>\n<div class=\"event\" id=\"4\"></div>\n<div class=\"event\" id=\"5\"></div>\n<div class=\"event\" id=\"6\"></div>\n</section>\n  ");
  var section3 = document.querySelector(".home_section-3");
  section3.innerHTML = "\n  <header>\n  <h1>NIGHTCLUB GALLERY</h1>\n  <img src=\"\" alt=\"\">\n</header>\n<figure class=\"home_figure-3\">\n  <img src=\"".concat(data[15].url, "\" alt=\"\">\n  <img src=\"").concat(data[16].url, "\" alt=\"\">\n  <img src=\"").concat(data[17].url, "\" alt=\"\">\n  <img src=\"").concat(data[18].url, "\" alt=\"\">\n  <img src=\"").concat(data[19].url, "\" alt=\"\">\n  <img src=\"").concat(data[20].url, "\" alt=\"\">\n  <img src=\"").concat(data[21].url, "\" alt=\"\">\n</figure>\n  ");
  var section4 = document.querySelector(".home_section-4");
  section4.innerHTML = "\n  <header>\n  <h1>NIGHT CLUB TRACK</h1>\n  <img src=\"\" alt=\"\">\n</header>\n<figure>\n  <img src=\"".concat(data[22].url, "\" alt=\"\">\n\n</figure>\n  ");
  var section5 = document.querySelector(".home_section-5");
  section5.innerHTML = "\n  <header>\n  <h1>LATEST VIDEO</h1>\n  <img src=\"\" alt=\"\">\n</header>\n<figure>\n  <img src=\"assets/images/content-img/video_poster.jpg\" alt=\"\">\n</figure>\n  ";
  var section6 = document.querySelector(".home_section-6");
  section6.innerHTML = "\n  <header>\n  <h1>RECENT BLOG</h1>\n  <img src=\"\" alt=\"\">\n</header>\n<figure>\n  <img src=\"".concat(data[1].url, "\" alt=\"\">\n<figcaption>\n<h4>MORE THAN 20 YEA...</h4>\n<h6>BY: Admin/3 Comments/16 Nov 2018</h6>\n<p>\nIts a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n</p>\n</figcaption>\n</figure>\n<figure>\n  <img src=\"").concat(data[2].url, "\" alt=\"\">\n<figcaption>\n<h4>MORE THAN 20 YEA...</h4>\n<h6>BY: Admin/3 Comments/16 Nov 2018</h6>\n<p>\nIts a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n</p>\n</figcaption>\n</figure>\n<figure>\n  <img src=\"").concat(data[0].url, "\" alt=\"\">\n<figcaption>\n<h4>MORE THAN 20 YEA...</h4>\n<h6>BY: Admin/3 Comments/16 Nov 2018</h6>\n<p>\nIts a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n</p>\n</figcaption>\n</figure>\n  ");
});