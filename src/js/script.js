$(function () {
    $(".menu").on("click", function () {
        $(".navigation__list").toggleClass("dropdown");
        $(".hamburger--squeeze").toggleClass("is-active");
    })
});