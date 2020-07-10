$(function () {
    //slick slider
    $('.slider-inner').slick({
        prevArrow: "<button class='slick-arrow slick-prev'><img src='img/tempSlider/left.svg'></button>",
        nextArrow: "<button class='slick-arrow slick-next'><img src='img/tempSlider/right.svg'></button>",
        autoplay: true,
        autoplaySpeed: 2000,
    })

    // MixitUp 
    var mixer = mixitup('.product__inner');

    //dropdown menu toggle
    $('.title-block__btn').on('click', function () {
        $('.dropdown').toggleClass('dropdown--active');
    });

    //rateYo stars
    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "13px",
        readOnly: true,
    });
});