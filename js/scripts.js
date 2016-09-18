$(window).scroll(function() {
    var fromTop = $(this).scrollTop();
    if (fromTop >= $('#banner-box').height()) {
        $('#quote-box').addClass('fixed');
        console.log("added");
    } else {
        $('#quote-box').removeClass('fixed');
        console.log("removed");
    }
});
