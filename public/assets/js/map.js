$(function () {
  "use strict";
  var a = 35.185231,
    b = -80.908375,
    c = 16,
    d = "assets/images/map-marker-icon.png",
    e = [
      {
        stylers: [
          { hue: "#ff1a00" },
          { invert_lightness: !0 },
          { saturation: -100 },
          { lightness: 33 },
          { gamma: 0.5 },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#2D333C" }],
      },
    ],
    f = {
      center: new google.maps.LatLng(a, b),
      zoom: c,
      panControl: !0,
      zoomControl: !0,
      mapTypeControl: !1,
      streetViewControl: !0,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: !1,
      styles: e,
    },
    g = new google.maps.Map(document.getElementById("google-container"), f);
  new google.maps.Marker({
    position: new google.maps.LatLng(a, b),
    map: g,
    visible: !0,
    icon: d,
  });
});
