$(function(){
    $('.owl-carousel').owlCarousel({
        nav:true,
        dots:false,
        items:1,
        loop:true,
        center:true,
        smartSpeed:450
    });

    $(".menu-button").on("click", function () {
        $(".menu").slideToggle("slow");
    })
});