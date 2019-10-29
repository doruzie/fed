const $ = jQuery;
$(document).ready(function(){
    $("nav a").click(function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $("main").addClass("close");
        setTimeout(function () {
            window.location.href = href;
        }, 500);
    });
}());