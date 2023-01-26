$(".menu_button").click(function () {
  $(".main_menu").slideToggle();
  $(".video").toggleClass("opacity");
});

if (window.innerWidth <= 768) {
  $(".main_menu a").click(function () {
    $(".main_menu").slideToggle();
  });
}

$("a[href='#start']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

