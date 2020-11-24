//paralex img
$('.parallax-window').parallax({imageSrc: 'https://images3.alphacoders.com/692/692124.jpg'});

//menu mobile version
const mobile_menu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

mobile_menu.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

//smooth navbar scrolling 
$(document).ready(function(){
  $("a").on('click', function(event) {
    navLinks.classList.toggle("open");
    links.forEach(link => 
    {
      link.classList.toggle("fade");
    });
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

// navbar bg

window.addEventListener('scroll', function () {
  let header = document.querySelector('nav');
  let windowPosition = window.scrollY > 750 -85;
  header.classList.toggle('nav-scrolled', windowPosition);
})
/*
const header = document.querySelector("nav");
const sectionOne = document.querySelector(".new-nav");

const sectionOneOptions = {
  rootMargin: "-150px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
*/

/* Sileshow*/
$(function() {
  $('#slides').slidesjs({
    width: 1040,
    height: 528,
    navigation: {
      active: false,
        // [boolean] Generates next and previous buttons.
        // You can set to false and use your own buttons.
        // User defined buttons must have the following:
        // previous button: class="slidesjs-previous slidesjs-navigation"
        // next button: class="slidesjs-next slidesjs-navigation"
      effect: "slide"
        // [string] Can be either "slide" or "fade".
    },
    play: {interval: 6000, active:true, restartDelay: 1500},
    effect: {
      slide: {speed: 1500},
      fade: { speed: 300 }
      },
    callback: {
      loaded: function(number) {
        // Do something awesome!
        // Passes start slide number
        console.log("Laoded");
      },
      start: function(number) {
        // Do something awesome!
        // Passes slide number at =start of animation
        console.log("start slide-"+number);
      },
      complete: function(number) {
        // Do something awesome!
        // Passes slide number at end of animation
        console.log("complete   slide-"+number);
      }
    }
  });
});