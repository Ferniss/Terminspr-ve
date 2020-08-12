    fetch("http://localhost:4000/assets/1", {
      "method": "GET"
    })
    .then(response => response.json())
.then(data =>{
  console.log(data)
  // document.querySelector('.src').src = data.url
});


function myFunction() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  let section1 = document.querySelector(".home_section-1")
  section1.innerHTML = `
  <header>
  <h1>WELCOME IN <br>NIGHT<span class="section1_header">CLUB</span></psan></h1>
  <img src="" alt="">
</header>
<figure>
  <img src="assets/images/Logo.png" alt="">
  <img src="assets/images/Logo.png" alt="">
  <img src="assets/images/Logo.png" alt="">
</figure>
  `

  let section2 = document.querySelector(".home_section-2")
  section2.innerHTML = `
  <header>
  <h1>EVENTS OF THE <br> MOTH</h1>
  <img src="" alt="">
</header>
<figure>
  <img src="assets/images/Logo.png" alt="">
</figure>
  `

  let section3 = document.querySelector(".home_section-3")
  section3.innerHTML = `
  <header>
  <h1>NIGHTCLUB GALLERY</h1>
  <img src="" alt="">
</header>
<figure>
  <img src="assets/images/Logo.png" alt="">
  <img src="assets/images/Logo.png" alt="">
  <img src="assets/images/Logo.png" alt="">
  <img src="assets/images/Logo.png" alt="">
  <img src="assets/images/Logo.png" alt="">
  <img src="assets/images/Logo.png" alt="">
</figure>
  `