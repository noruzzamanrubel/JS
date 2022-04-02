(function ($) {
  $(document).ready(function () {
    $(document).on("change", ".checkbox_limit input", function () {
      var numberOfChecked = $(".checkbox_limit input:checkbox:checked").length;
      if (numberOfChecked >= 2) {
        $(".checkbox_limit input:not(:checked)").prop("disabled", true);
      } else {
        $(".checkbox_limit input:not(:checked)").removeAttr("disabled", true);
      }
    });
  });
})(jQuery);


