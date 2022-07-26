let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

menu.onclick = () =>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}


// slider swipper js
window.onscroll = () =>{
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    effect: "fade",
     loop:true,
     centereslides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
  