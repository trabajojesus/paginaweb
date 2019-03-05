$(function () {
        $("#menu-bar").click(function () {
            if ($(this).is(":checked")) {
                $(".menu").show();
            } else {
                $(".menu").hide();
            }
        });
    });