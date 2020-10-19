$(function(){
    // Fixed header

     let header = $("#header");
     let intro = $("#intro");
     let introH = intro.innerHeight(); // Height of our intro
     let scrollPos = $(window).scrollTop(); // Height when u scroll
     let nav = $("#nav");
     let navToggle = $("#navToggle");

     checkScroll(scrollPos, introH);

    $(window).on("scroll load resize",function(){
        introH = intro.innerHeight(); // Height of our intro
        scrollPos = $(this).scrollTop(); // Scroll position

        if(scrollPos > introH){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    function checkScroll(scrollPos, introH){
        if( scrollPos > introH) {
            header.addClass("fixed");
        }
        else{
            header.removeClass("fixed");
        }
    }

    // Smooth scroll

    $("[data-scroll]").on("click",function(event){
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

    $("html, body").animate({
        scrollTop: elementOffset -70
    }, 700);
    });

    // Burger menu

    $("#navToggle").on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show");
    });

    // Slider

    let slider = $("#testimonialsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false
    });

});