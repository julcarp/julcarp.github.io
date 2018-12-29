$(document).ready(function () {
    $(".navbar a").click(function (event) {
        event.preventDefault();
        var targetID = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(targetID).offset().top
        }, 1000, 'swing');
    });



    $(window).scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });

});
