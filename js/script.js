const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Toggle Navbar Menu on Burger Click
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Closed Navbar Menu on Links Click
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
   if (window.innerWidth >= 769) {
      if (navbarMenu.classList.contains("is-active")) {
         navbarMenu.classList.remove("is-active");
      }
   }
});

$(document).ready(function () {
  
   'use strict';
   
    var c, currentScrollTop = 0,
        navbar = $('header');
 
    $(window).scroll(function () {
       var a = $(window).scrollTop();
       var b = navbar.height();
      
       currentScrollTop = a;
      
       if (c < currentScrollTop && a > b + b) {
         navbar.addClass("scrollUp");
       } else if (c > currentScrollTop && !(a <= b)) {
         navbar.removeClass("scrollUp");
       }
       c = currentScrollTop;
      
      console.log(a);
   });
   
 });