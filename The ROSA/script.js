//Select element funtion
const selectElement = function(element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler .addEventListener('click' , function () {
    body.classList.toggle('open');
});

//Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left',{
   origin: 'left' ,
   duration: 1000,
   distance: '25rem',
   delay: 300,
});

sr.reveal('.animate-right',{
    origin: 'right' ,
    duration: 1000,
    distance: '25rem',
    delay: 600,
 });

 sr.reveal('.animate-top',{
    origin: 'top' ,
    duration: 1000,
    distance: '25rem',
    delay: 600,
 });

 sr.reveal('.animate-bottom',{
    origin: 'bottom' ,
    duration: 1000,
    distance: '25rem',
    delay: 600,
 });

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var header = document.getElementById("header");

// Get the offset position of the navbar
var fixed = header.offsetTop;

// Add the fixed class to the navbar when you reach its scroll position. Remove "fixed" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= 500) {
    header.classList.add("fixed")
  } else {
    header.classList.remove("fixed");
  }
}

/*Smooth scroll*/
   
  /* $("[data-scroll]").on("click", function(event) {
      event.preventDefault();
  
      var $this = $(this),
          blockId = $this.data('scroll'),
          blockOffset = $(blockId).offset().top;
  
      $("#nav a").removeClass("active");
      $this.addClass("active");
  
      $("html, body").animate({
          scrollTop:  blockOffset
      }, 500);
  });*/

  $(document).ready(function(){
   // Add smooth scrolling to all links
   $("a").on('click', function(event) {
 
     // Make sure this.hash has a value before overriding default behavior
     if (this.hash !== "") {
       // Prevent default anchor click behavior
       event.preventDefault();
 
       // Store hash
       var hash = this.hash;
 
       // Using jQuery's animate() method to add smooth page scroll
       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
       $('html, body').animate({
         scrollTop: $(hash).offset().top
       }, 200, function(){
 
         // Add hash (#) to URL when done scrolling (default click behavior)
         window.location.hash = hash;
       });
     } // End if
   });
 });