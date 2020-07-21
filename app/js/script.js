$(function () {
    //slick slider
    $('.slider-inner').slick({
        appendArrows: $('.title-block__ctrl'),
        prevArrow: "<button class='slick-arrow slick-prev'><img src='img/tempSlider/left.svg'></button>",
        nextArrow: "<button class='slick-arrow slick-next'><img src='img/tempSlider/right.svg'></button>",
        autoplay: true,
        slidesToShow: 1,
        adaptiveHeight: true,
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
        responsive: [{
                breakpoint: 1010,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    //feedback slider
    $('.feedback-card').slick({
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });

    // MixitUp 
    if ($('.product__inner').length) {
        var mixer = mixitup('.product__inner');
    }


    //dropdown menu toggle
    $('.title-block__btn').on('click', function () {
        $('.dropdown').toggleClass('dropdown--active');
    });

    //account-info toogle 
    $('.header-top__button').on('click', function () {
        $('.dropmenu__lists').toggleClass('dropmenu__lists--active');
    });
    //burger-menu
    $('.burger').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
        $('.burger__item').toggleClass('burger__item--active');
    });



    //rateYo stars
    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "13px",
        spacing: "4px",
        readOnly: true,
    });


});