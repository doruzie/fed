const $ = jQuery;
$(document).ready(function(){

    // Page animation script - Dorus Bos
    $("nav a").click(function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $("main").addClass("close");
        setTimeout(function () {
            window.location.href = href;
        }, 500);
    });

    // Smooth anchor scrolling - samuel Kyama from https://css-tricks.com/snippets/jquery/smooth-scrolling/
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
}());