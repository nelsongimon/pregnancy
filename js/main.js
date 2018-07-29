$(function(){
    $('.carousel').carousel({
        interval: 5000,
        pause: false
    });

    //WOW Scroll Spy
    var wow = new WOW({
    //disabled for mobile
        mobile: false
    });
    wow.init();

    var offset = 170;
    $(window).scroll(function() {
        if($(window).width() < 767){
            return false;
        }
        if ($(this).scrollTop() > offset) {
            $('#navbar-menu').css('display', 'none');
            $('#navbar-top').css('display', 'block');
        } else {
            $('#navbar-menu').css('display', 'block');
            $('#navbar-top').css('display', 'none');
        }
    });
})