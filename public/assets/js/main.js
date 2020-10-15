$.getScript("https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.4.0/jquery.flexslider-min.js");
var slider = function () {
    var a = $(".flexslider.clients");
    a.flexslider({
      selector: ".slides > .item",
      manualControls: ".flex-control-nav li",
      directionNav: !1,
      slideshowSpeed: 8000,
      after: function (a) {
        a.playing || a.play();
      },
    });
};
$("a.flex-prev").on("click", function (a) {
  a.preventDefault(), $(".flexslider").flexslider("prev");
}),
$("a.flex-next").on("click", function (a) {
  a.preventDefault(), $(".flexslider").flexslider("next");
});

var circleChart = function () {
  $(".circle-chart")
    .find(".item-progress")
    .each(function () {
      var a = $(this),
        b = 108,
        c = b * ($(this).data("percent") / 100);
        a.one("inview", function (b) {
          b && a.animate({ height: c }, 1500);
        })
    });
};
var barChart = function () {
  $(".bar-chart")
    .find(".item-progress")
    .each(function () {
      var a = $(this),
        b = $(this).prev(),
        c = $(this).parent().width() * ($(this).data("percent") / 100);
        a.one("inview", function (d) {
            d &&
              (a.animate({ width: c }, 1500),
              b.animate({ left: c - b.width() }, 1500));
          })

    });
};
$(window).load(function () {
  setTimeout(() => {
    slider();
    circleChart();
    barChart();
  }, 5000);
});



