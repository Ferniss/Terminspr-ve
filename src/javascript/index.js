    function myFunction() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

    fetch("http://localhost:4000/assets", {
      "method": "GET"
    })
    .then(response => response.json())
.then(data =>{
  console.log(data)
  console.log(data[0])
  // document.querySelector('.src').src = data.url


  let figure_event = document.querySelector(".figure_event")
  figure_event.innerHTML = `

  <img src="${data[8].url}" alt="">

  `

  let home_figure = document.querySelector(".home_figure")
  home_figure.innerHTML = `
  <img src="${data[15].url}" alt="">
  <img src="${data[16].url}" alt="">
  <img src="${data[17].url}" alt="">
  <img src="${data[18].url}" alt="">
  <img src="${data[19].url}" alt="">
  <img src="${data[20].url}" alt="">
  <img src="${data[21].url}" alt="">
  `


  let section6 = document.querySelector(".home_section-6")
  section6.innerHTML = `
  <header>
  <h1>RECENT BLOG</h1>
  <img src="" alt="">
</header>
<figure>
  <img src="${data[1].url}" alt="">
<figcaption>
<h4>MORE THAN 20 YEA...</h4>
<h6>BY: Admin/3 Comments/16 Nov 2018</h6>
<p>
Its a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
</p>
</figcaption>
</figure>
<figure>
  <img src="${data[2].url}" alt="">
<figcaption>
<h4>MORE THAN 20 YEA...</h4>
<h6>BY: Admin/3 Comments/16 Nov 2018</h6>
<p>
Its a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
</p>
</figcaption>
</figure>
<figure>
  <img src="${data[0].url}" alt="">
<figcaption>
<h4>MORE THAN 20 YEA...</h4>
<h6>BY: Admin/3 Comments/16 Nov 2018</h6>
<p>
Its a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
</p>
</figcaption>
</figure>
  `
});

fetch("http://localhost:4000/events", {
  "method": "GET"
})
.then(response => response.json())
.then(data =>{
console.log(data)
// document.querySelector('.src').src = data.url
let details = document.querySelector('.event_details')
details.innerHTML = `
<span>${new Date(data[0].eventDate)}</span>
`

});