$(function () {
    $('.slider-inner').slick({
        prevArrow: "<button class='slick-arrow slick-prev'><img src='img/tempSlider/left.svg'></button>",
        nextArrow: "<button class='slick-arrow slick-next'><img src='img/tempSlider/right.svg'></button>"
    })

    var mixer = mixitup('.product__inner');


    $('.title-block__btn').on('click', function () {
        $('.dropdown').toggleClass('dropdown--active');
    });
});