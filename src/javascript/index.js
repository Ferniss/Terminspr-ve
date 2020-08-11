// let test = fetch("http://localhost:4000/assets/1", {
//         "method": "GET"
//     })
//     .then(data => {
//         console.log(data)
//         document.querySelector('.img').src = data.url
//     })
//     .catch(err => console.error(err));
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }