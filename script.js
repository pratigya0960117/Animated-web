// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
// var a = document.querySelector("#elem1")
console.log(a)
var elemC = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");

elemC.addEventListener("mouseenter", function() {
    fixed.style.display = "block"; // Or any valid display value like "block", "inline", etc.
});
elemC.addEventListener("mouseleave", function() {
    fixed.style.display = "none"; // Or any valid display value like "block", "inline", etc.
});
var elems = document.querySelectorAll(".elems");
// var fixed = document.querySelector("#fixed-image");

elems.forEach(function(e) {
    e.addEventListener("mouseenter", function() {
        var image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`; // Use backticks for template literals
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var menu = document.querySelector("nav h3")
  var full = document.querySelector("#full-src")
  menu.addEventListener("click",function(){
        full.style.top = 0
        navimg.style.opacity=0
  });

