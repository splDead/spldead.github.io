$(function () {
    $(".menu").on("click", function () {
        $(this).toggleClass("active-menu");
        $(".navigation__list").toggleClass("dropdown");
        $(".hamburger--squeeze").toggleClass("is-active");
    });


    $(".certificates__image > img").on("click", function () {

        if ($(window).width() <= 600) {
            return;
        }

        var img = $(this),
            over = $(".overlay");

        over.fadeToggle();
        over.on('click', function () {
            img.removeClass("modal");
            $(this).fadeOut();
        });

        img.toggleClass("modal");
    });

});