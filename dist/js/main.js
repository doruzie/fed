const $ = jQuery;
$(document).ready(function(){

    // Toggle popup
    $("section#projects article:nth-child(3) a").click(function(){
        event.preventDefault();
        $(".popup").addClass("open");
    });

    $("section.popup a").click(function(){
        event.preventDefault();
        $(".popup").removeClass("open");
    });

    // Page animation script - Dorus Bos
    $("nav a").click(function (e) {
        e.preventDefault();
        let href = $(this).attr('href');
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