$(document).ready(function() {
  $(".burger-nav").on("click", function() {
    $(".mobile-menu").toggleClass("mobile-menu-active");
    $("main").toggleClass("hidden");
    $(".burger-nav").toggleClass("fa-times");
  });
});
