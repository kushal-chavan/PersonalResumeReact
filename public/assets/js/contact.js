$(function () {
  if ($.fn.select2) {
    $(".select2").select2({
      minimumResultsForSearch: "Infinity",
      containerCssClass: "select2-container-custom",
      dropdownCssClass: "select2-dropdown-custom",
    });
  }
  $(".validate").validate({
    errorPlacement: function (error, element) {
      if (
        element.attr("type") == "radio" ||
        element.attr("type") == "checkbox"
      ) {
        error.appendTo(element.parent().parent());
      } else {
        error.appendTo(element.parent());
      }
    },
  });
  $(document).on("submit", "#contact-form", function (e) {
    e.preventDefault();
    var buttonCopy = $("#contact-form button").html(),
      sendingMessage = "Sending...",
      errorMessage = "Error Sending. Try Again Later",
      okMessage = "Thanks ! I will be in touch.";
    $("#contact-form button").html(
      "<i class='icon-Mail-Send'></i> " + sendingMessage
    );
    $.ajax({
      url: $("#contact-form").attr("action"),
      type: "post",
      dataType: "html",
      data: $("#contact-form").serialize(),
      success: function (data) {
        if (data == "Mail Sent Successfully") {
          $("#contact-form button").html(
            "<i class='icon-Paper-Plane'></i> " + okMessage
          );
          $("#contact-form")[0].reset();
        } else {
          $("#contact-form button").html(
            "<i class='icon-Danger'></i> " + errorMessage
          );
        }
        setTimeout(function () {
          $("#contact-form button").html(buttonCopy);
          $(".contact-details").toggle();
          $("#contact-form").css("display", "none");
        }, 1000);
      },
      error: function (xhr, err) {
        $("#contact-form button").html(
          "<i class='icon-Danger'></i> " + errorMessage
        );
        setTimeout(function () {
          $("#contact-form button").html(buttonCopy);
        }, 3000);
      },
    });
  });
});
