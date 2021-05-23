$(document).ready(function() {
    $('.slider-banner').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 6000, 
    });
    $('.slide-new').slick({
        autoplay: true,
        arrow: true,
        dots: true, 
        slidesToShow: 2,
        slidesToScroll: 1, 
        prevArrow: '<a href="javascript:void(0)" class="prev"><img src="images/arr-left.png" class="img-fluid" alt=""></a>',
        nextArrow: '<a href="javascript:void(0)" class="next"><img src="images/arr-right.png" class="img-fluid" alt=""></a>',
        responsive: [
            {
                breakpoint: 767, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                } 
            }, 
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $( ".nav-toggle" ).click(function() {
        $('html').toggleClass('nav-open');
    });
    $( ".label-search" ).click(function() {
        $('html').toggleClass('search-open');
    });
    $( ".btn-submenu" ).click(function() {
        $('.header-nav li ul').slideToggle(400);
        $(this).toggleClass('active');
    });
    
})