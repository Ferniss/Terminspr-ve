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

  var figure_event = document.querySelector(".figure_event");
  figure_event.innerHTML = "\n\n  <img src=\"".concat(data[8].url, "\" alt=\"\">\n\n  ");
  var home_figure = document.querySelector(".home_figure");
  home_figure.innerHTML = "\n  <img src=\"".concat(data[15].url, "\" alt=\"\">\n  <img src=\"").concat(data[16].url, "\" alt=\"\">\n  <img src=\"").concat(data[17].url, "\" alt=\"\">\n  <img src=\"").concat(data[18].url, "\" alt=\"\">\n  <img src=\"").concat(data[19].url, "\" alt=\"\">\n  <img src=\"").concat(data[20].url, "\" alt=\"\">\n  <img src=\"").concat(data[21].url, "\" alt=\"\">\n  ");
  var section6 = document.querySelector(".home_section-6");
  section6.innerHTML = "\n  <header>\n  <h1>RECENT BLOG</h1>\n  <img src=\"\" alt=\"\">\n</header>\n<figure>\n  <img src=\"".concat(data[1].url, "\" alt=\"\">\n<figcaption>\n<h4>MORE THAN 20 YEA...</h4>\n<h6>BY: Admin/3 Comments/16 Nov 2018</h6>\n<p>\nIts a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n</p>\n</figcaption>\n</figure>\n<figure>\n  <img src=\"").concat(data[2].url, "\" alt=\"\">\n<figcaption>\n<h4>MORE THAN 20 YEA...</h4>\n<h6>BY: Admin/3 Comments/16 Nov 2018</h6>\n<p>\nIts a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n</p>\n</figcaption>\n</figure>\n<figure>\n  <img src=\"").concat(data[0].url, "\" alt=\"\">\n<figcaption>\n<h4>MORE THAN 20 YEA...</h4>\n<h6>BY: Admin/3 Comments/16 Nov 2018</h6>\n<p>\nIts a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n</p>\n</figcaption>\n</figure>\n  ");
});
fetch("http://localhost:4000/events", {
  "method": "GET"
}).then(function (response) {
  return response.json();
}).then(function (data) {
  console.log(data); // document.querySelector('.src').src = data.url

  var details = document.querySelector('.event_details');
  details.innerHTML = "\n<span>".concat(new Date(data[0].eventDate), "</span>\n");
});