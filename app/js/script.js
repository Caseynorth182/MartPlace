$(function () {
    //slick slider
    $('.slider-inner').slick({
        appendArrows: $('.title-block__ctrl'),
        prevArrow: "<button class='slick-arrow slick-prev'><img src='img/tempSlider/left.svg'></button>",
        nextArrow: "<button class='slick-arrow slick-next'><img src='img/tempSlider/right.svg'></button>",
        autoplay: true,
        slidesToShow: 1,
        autoplaySpeed: 2000,
    })

    //card-slider
    $('.card-slider__inner').slick({
        appendArrows: $('.title-block__ctrl-blue'),
        prevArrow: "<button class='slick-arrow slick-prev'><img src='img/tempSlider/left.svg'></button>",
        nextArrow: "<button class='slick-arrow slick-next'><img src='img/tempSlider/right.svg'></button>",
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
    });
    //feedback slider
    $('.feedback-card').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
    });

    // MixitUp 
    if ($('.product__inner').length) {
        var mixer = mixitup('.product__inner');
    }


    //dropdown menu toggle
    $('.title-block__btn').on('click', function () {
        $('.dropdown').toggleClass('dropdown--active');
    });

    //rateYo stars
    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "13px",
        spacing: "4px",
        readOnly: true,
    });


});