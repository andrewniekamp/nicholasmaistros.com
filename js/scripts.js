$(window).scroll(function() {
    var fromTop = $(this).scrollTop();
    if (fromTop >= $('#banner-box').height()) {
        $('#sticky-section').addClass('fixed');
        $('#quote-box').addClass('smaller');
        $('.main-container').addClass('padded-container');
    } else {
        $('#sticky-section').removeClass('fixed');
        $('#quote-box').removeClass('smaller');
        $('.main-container').removeClass('padded-container');
    }
});

var scrollAnimation = function(destination) {
  $('html, body').animate({
    scrollTop: $(destination).offset().top-55
  }, 1000);
};

$(".about-nav").click(function() {
  scrollAnimation("#about");
});
$(".publications-nav").click(function() {
  scrollAnimation("#publications");
});
$(".projects-nav").click(function() {
  scrollAnimation("#projects");
});
