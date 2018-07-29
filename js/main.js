$(document).ready(function () {
    var obj;

    if ((obj = $('#camera')).length > 0) {
        obj.camera({
            height: '32.96875%',
            minHeight: '200px',
            pagination: false,
            thumbnails: false,
            playPause: false,
            hover: false,
            loader: 'none',
            navigation: true,
            navigationHover: false,
            mobileNavHover: false,
            fx: 'simpleFade'
        })
    }

    if ((obj = $('a[data-type="lightbox"]')).length > 0) {
        obj.touchTouch();
    }

    if ((obj = $('#tabs')).length > 0) {
        obj.easyResponsiveTabs();
    }

    if ((obj = $('#accordion')).length > 0) {
        obj.accordion({
            heightStyle: "content"
        });
    }

    if ((obj = $('#owl')).length > 0) {
        obj.owlCarousel({
            navigation: true,
            autoPlay: true,
            stopOnHover: true,
            slideSpeed: 300,
            pagination: false,
            paginationSpeed: 400,
            singleItem: true,
            navigationText: ["", ""]
        })
    }

    if ((obj = $('#owl2')).length > 0) {
        obj.owlCarousel({
            navigation: false,
            autoPlay: true,
            stopOnHover: true,
            slideSpeed: 300,
            pagination: true,
            paginationSpeed: 400,
            singleItem: true,
            navigationText: ["", ""]
        })
    }

    if ((obj = $('#owl3')).length > 0) {
        obj.owlCarousel({
            navigation: false,
            autoPlay: true,
            stopOnHover: true,
            slideSpeed: 300,
            pagination: true,
            paginationSpeed: 400,
            singleItem: true,
            navigationText: ["", ""]
        })
    }
});

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