$(function () {
  function h() {
    var a = $(window).height();
    $(".full-screen").css("min-height", a);
  }
  $(document).ready(function () {
    $.fn.jpreLoader &&
      $("body").jpreLoader({ showPercentage: !1, loaderVPos: "50%" });
  });
  var c,
    a = function (a) {
      "resultLoading" != $("body").find("#resultLoading").attr("id") &&
        $("body").append(
          '<div id="resultLoading" style="display:none"><div><img src="../assets/images/ajax_loader_blue.gif" width="50%" height="50%"><div>' +
            a +
            '</div></div><div class="bg"></div></div>'
        ),
        
        $("#resultLoading .bg").height("100%"),
        $("#resultLoading").fadeIn(300),
        $("body").css("cursor", "wait");
    },
    b = function () {
      $("#resultLoading .bg").height("100%"),
        $("#resultLoading").fadeOut(300),
        $("body").css("cursor", "default");
    };
    
  $(window).smartload(function () {
    $.fn.matchHeight && $(".match-height").matchHeight();
  }),
    h(),
    ($(window).smartresize = function () {
      h();
    }),
    $("body").on("activate.bs.scrollspy", function () {
      $(".page-scroll.dropdown > .dropdown-toggle").each(function () {
        $(this).attr("data-target", "#");
      });
    });
  var i = function () {
    $(".page-scroll > a").bind("click", function (a) {
      a.preventDefault();
      var b = $(this),
        c = b.attr("href"),
        d = $("body").attr("data-offset");
      $("html, body")
        .stop()
        .animate(
          { scrollTop: $(c).offset().top - (d - 1) },
          1500,
          "easeInOutExpo"
        ),
        $(this).parent().hasClass("dropdown") ||
          $(".Chouhan-collapse").collapse("hide");
    });
  };
  i();
  var j = function () {
    var a = Math.max($(window).width(), window.innerWidth),
      b = $(".navbar.navbar-fixed-top");
    $.fn.unstick && b.unstick(),
      $.fn.sticky && a >= 992 && b.sticky({ topSpacing: 0 });
  };
  j(),
    ($(window).smartresize = function () {
      j();
    });
  var k = function () {
    var a = Math.max($(window).width(), window.innerWidth),
      b = $(".navbar .dropdown");
    a >= 992
      ? b
          .on("mouseover", function () {
            $(this).hasClass("open") || $(this).addClass("open");
          })
          .on("mouseout", function () {
            $(this).hasClass("open") && $(this).removeClass("open");
          })
      : b.off("mouseover").off("mouseout");
  };
  k(),
    ($(window).smartresize = function () {
      k();
    }),
    $(".dropdown-menu").click(function (a) {
      a.stopPropagation();
    }),
    $.fn.magnificPopup &&
      $(".portfolio").magnificPopup({
        delegate: "a.zoom",
        type: "image",
        fixedContentPos: !1,
        removalDelay: 300,
        mainClass: "mfp-fade",
        gallery: {
          enabled: !0,
          preload: [0, 2],
          arrowMarkup:
            '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
          tPrev: "Previous Project",
          tNext: "Next Project",
        },
      });
  var l = function () {
    $(".column-chart")
      .find(".item-progress")
      .each(function () {
        var a = $(this),
          b = $(this).parent().height() * ($(this).data("percent") / 100);
        a.css("height", b);
      });
  };
  $(window).smartload(function () {
    l();
  });
  var m = function () {
    var a = Math.max($(window).width(), window.innerWidth),
      b = $(".collapse:not(:first)", "#work"),
      c = $(".collapse:not(:first)", "#education");
    a < 768
      ? (b.collapse("show"), c.collapse("show"))
      : (b.collapse("hide"), c.collapse("hide"));
  };
  $(window).smartload(function () {
    m();
  }),
    ($(window).smartresize = function () {
      m();
    }),
    $(window).smartload(function () {
      if ($.fn.flexslider) {
        var a = $(".flexslider.clients");
        a.flexslider({
          selector: ".slides > .item",
          manualControls: ".flex-control-nav li",
          directionNav: !1,
          slideshowSpeed: 3e4,
          after: function (a) {
            a.playing || a.play();
          },
        });
      }
    }),
    $("a.flex-prev").on("click", function (a) {
      a.preventDefault(), $(".flexslider").flexslider("prev");
    }),
    $("a.flex-next").on("click", function (a) {
      a.preventDefault(), $(".flexslider").flexslider("next");
    });
  var n = function () {
    $(".circle-chart")
      .find(".item-progress")
      .each(function () {
        var a = $(this),
          b = 108,
          c = b * ($(this).data("percent") / 100);
        jQuery.browser.mobile === !1
          ? a.one("inview", function (b) {
              b && a.animate({ height: c }, 1500);
            })
          : a.css("height", c);
      });
  };
  $(window).smartload(function () {
    n();
  });
  var o = function () {
    $(".bar-chart")
      .find(".item-progress")
      .each(function () {
        var a = $(this),
          b = $(this).prev(),
          c = $(this).parent().width() * ($(this).data("percent") / 100);
        jQuery.browser.mobile === !1
          ? a.one("inview", function (d) {
              d &&
                (a.animate({ width: c }, 1500),
                b.animate({ left: c - b.width() }, 1500));
            })
          : (a.css("width", c), b.css("left", c - b.width()));
      });
  };
  $(window).smartload(function () {
    o();
  }),
    ($(window).smartresize = function () {
      o();
    });
  var p = function () {
    var a = $(".milestones").find(".number");
    $.fn.countTo && a.countTo({ speed: 3e3 });
  };
  if (
    ($(".sayHello").click(function (a) {
      $(".contact-details").toggle(),
        $(".contact-form").css("display", "inline");
    }),
    $(".downloadResumeAnchor").click(function (c) {
      if ("Request Resume" === c.currentTarget.text)
        return (
          window.open("#contact", "_self"),
          $(".contact-details").toggle(),
          void $(".contact-form").css("display", "inline")
        );
      a("Downloading.. please wait.."), c.preventDefault();
      var d = !1;
      $.getJSON("http://ip-api.com/json/?callback=?", function (a) {
        (d = !0),
          ("Jersey City" !== a.city && "New York City" !== a.city) ||
          "United States" !== a.country ||
          "US" !== a.countryCode ||
          ("NJ" !== a.region && "NY" !== a.region) ||
          ("New Jersey" !== a.regionName && "New York" !== a.regionName) ||
          "success" !== a.status
            ? (b(),
              BootstrapDialog.show({
                id: "downloadResumeDialog",
                type: BootstrapDialog.TYPE_PRIMARY,
                title: "Oops !!!",
                message:
                  "Seems like you are out of NY/NJ States. I am looking for remote projects or if physical, then in NYC & NJ only. However, I can revert back to you shortly upon request.",
                closable: !0,
              }),
              setTimeout(function () {
                $(".modal-dialog")
                  .fadeTo(2e3, 500)
                  .slideUp(500, function () {
                    $("#downloadResumeDialog").modal("hide");
                  }),
                  $("a.downloadResumeAnchor").text("Request Resume");
              }, 1e4))
            : (window.open("data/Chouhan.docx", "_self"),
              setTimeout(function () {
                b(),
                  BootstrapDialog.show({
                    id: "downloadResumeDialog",
                    type: BootstrapDialog.TYPE_PRIMARY,
                    title: "Gracias !",
                    message:
                      "Thanks for having my resume. Hope to hear back from you soon.",
                    closable: !0,
                  });
              }, 1e3),
              setTimeout(function () {
                $(".modal-dialog")
                  .fadeTo(500, 0)
                  .slideUp(500, function () {
                    $("#downloadResumeDialog").modal("hide");
                  });
              }, 4e3));
      }).fail(function () {
        b(),
          console.log("error"),
          BootstrapDialog.show({
            id: "downloadResumeDialog",
            type: BootstrapDialog.TYPE_PRIMARY,
            title: "Oops !!!",
            message:
              "Seems there occurred some error. Please try again in sometime.",
            closable: !0,
          }),
          setTimeout(function () {
            $(".modal-dialog")
              .fadeTo(2e3, 500)
              .slideUp(500, function () {
                $("#downloadResumeDialog").modal("hide");
              });
          }, 5e3);
      }),
        setTimeout(function () {
          b(),
            d ||
              (BootstrapDialog.show({
                id: "downloadResumeDialog",
                type: BootstrapDialog.TYPE_PRIMARY,
                title: "Oops !!!",
                message:
                  "Looks like you've AdBlocker enabled, please disable and try again.",
                closable: !0,
              }),
              setTimeout(function () {
                $(".modal-dialog")
                  .fadeTo(2e3, 500)
                  .slideUp(500, function () {
                    $("#downloadResumeDialog").modal("hide");
                  });
              }, 2e3));
        }, 3e4);
    }),
    jQuery.browser.mobile === !1)
  ) {
    var q = $(".milestones .number");
    q.one("inview", function (a) {
      a && p();
    });
  } else p();
});
