$(function () {
    $(".menu").on("click", function () {
        $(this).toggleClass("active-menu");
        $(".navigation__list").toggleClass("dropdown");
        $(".hamburger--squeeze").toggleClass("is-active");
    })
});