$(document).ready(function () {
    $("a").click(function (event) {
        event.preventDefault();
        var targetID = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(targetID).offset().top
        }, 1000, 'swing');
    });
});
