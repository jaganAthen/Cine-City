
////alert about under processs
function showAlert() {
  alert("We're sorry, our site is currently under construction. Please check back soon for updates!");
}

///////////////////////header navbar functionality
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});
menu.onclick = () =>{
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
}
window.onscroll = () =>{
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
   
}

///////////////////////////// swiper js funtionality
var swiper = new Swiper(".home", { //Auto play
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});

///////////////////////////////// swiper 2 function
var swiper = new Swiper(".coming-container", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay:  5000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  speed: 500, // Set the slide animation speed to 500 milliseconds
  ease: 'ease', // Set the easing function to 'ease'
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    568: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    968: {
      slidesPerView: 5,
    }
  }
});





