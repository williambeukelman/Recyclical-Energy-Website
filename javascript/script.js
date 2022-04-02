"use strict"

function pageAnimations(){
    var hash = $('.navbar-nav')
          .find('a.active')
          .attr('href');
    
        if (hash !== '#page-home') {
          $('header nav').addClass('bg-opaque');
          $('header nav').addClass('d-lg-flex');
          $('header nav').removeClass('d-lg-none');
        } else {
          $('header nav').removeClass('bg-opaque');
          $('header nav').removeClass('d-lg-flex');
          $('header nav').addClass('d-lg-none');
        }

        if (hash == '#page-impact'){
            $(".bg-img.background-sky").css("background-color", "transparent");
            $("#wind-turbine").css("filter", "none");
            $("#solar-panel").css("filter", "none");
        } else {
            $(".bg-img.background-sky").css("background-color", "rgba(0, 0, 0, 0.521)");
            $("#wind-turbine").css("filter", "blur(50px)");
            $("#solar-panel").css("filter", "blur(50px)");
        }

        if (hash == '#page-materials'){
            $('.picture-circle').removeClass("out-left");
            $('.picture-circle.picture-overlap').removeClass("out-right");
        } else {
            $('.picture-circle').addClass("out-left");
            $('.picture-circle.picture-overlap').addClass("out-right");
        }
}

$(document).ready(() => {

    //Animate background at page load
    $(".bg-img.background-powerline").css("background-position", "top");

    //Run page specific animations on load
    pageAnimations();

    //Change navigation background when scrolling
    $(window).on('activate.bs.scrollspy', pageAnimations);

    //Enable tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })


});