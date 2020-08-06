$(function () {
    //slick slider
    $(".slider").slick({
        appendArrows: $(".title-block--blue"),
        prevArrow: "<button class='slick-arrow slick-prev'><img src='img/tempSlider/left.svg'></button>",
        nextArrow: "<button class='slick-arrow slick-next'><img src='img/tempSlider/right.svg'></button>",
        /*  autoplay: true, */
        slidesToShow: 1,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                arrows: false,
            },
        }, ],
    });

    //card-slider
    $(".card-slider__inner").slick({
        appendArrows: $(".title-block--purple"),
        prevArrow: "<button class='slick-arrow slick-prev'><img src='img/tempSlider/left.svg'></button>",
        nextArrow: "<button class='slick-arrow slick-next'><img src='img/tempSlider/right.svg'></button>",
        /*   autoplay: true, */
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1010,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                },
            },
        ],
    });
    //feedback slider
    $(".feedback-card").slick({
        arrows: true,
        infinite: true,
        /*  autoplay: true, */
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 1210,
                settings: {
                    arrows: false,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    });

    //dropdown menu toggle
    $(".title-block__btn").on("click", function () {
        $(".dropdown").toggleClass("dropdown--active");
    });

    //account-info toogle
    $(".header-top__button").on("click", function () {
        $(".dropmenu__lists").toggleClass("dropmenu__lists--active");
    });
    //burger-menu
    $(".burger").on("click", function () {
        $(".menu__list").toggleClass("menu__list--active");
        $(".burger__item").toggleClass("burger__item--active");
    });

    //category-filter btn
    $(".product-filter__group-btn--list").on("click", function () {
        $(".card-item").addClass("list");
        $(".product-filter__group-btn--list").addClass("active");
        $(".product-filter__group-btn--grid").removeClass("active");
        $(".card-item").removeClass("grid");
    });
    $(".product-filter__group-btn--grid").on("click", function () {
        $(".card-item").addClass("grid");
        $(".product-filter__group-btn--grid").addClass("active");
        $(".product-filter__group-btn--list").removeClass("active");
        $(".card-item").removeClass("list");
    });

    //favorite-filter btn
    $(".product-filter__group-btn--list").on("click", function () {
        $(".product-card__item").addClass("product-card__item--list");
    });
    $(".product-filter__group-btn--grid").on("click", function () {
        $(".product-card__item").removeClass("product-card__item--list");
    });
    //adaptive btn  grid/list section
    $(window).resize(function () {
        if ($(window).width() <= 850)
            $(".product-card__item").removeClass("product-card__item--list");
    });
    /*  if ($(window).width() <= 850)
         $(".product-card__item--list").addClass("product-card__item--list"); */

    //aside accordion category toogle
    $(".accordion-item__trigger").click(function () {
        $(this).next(".accordion-item__content").slideToggle();
    });

    //PRODUCT-ONE TABS
    $(".product-one__tabs .tab").on("click", function (event) {
        var id = $(this).attr("data-id");
        $(".product-one__tabs ")
            .find(".tab-item")
            .removeClass("active-tab")
            .hide();
        $(".product-one__tabs .tabs  ").find(".tab").removeClass("active");
        $(this).addClass("active");
        $("#" + id)
            .addClass("active-tab")
            .fadeIn();
        return false;
    });
    //PRODUCT-ONE TABS
    $(".blog__tabs .tab").on("click", function (event) {
        var id = $(this).attr("data-id");
        $(".blog__tabs").find(".tab-item").removeClass("active-tab").hide();
        $(".blog__tabs .tabs").find(".tab").removeClass("active");
        $(this).addClass("active");
        $("#" + id)
            .addClass("active-tab")
            .fadeIn();
        return false;
    });

    //ion Range-slider
    $(".js-range-slider").ionRangeSlider({
        skin: "big",
        type: "double",
        min: 0,
        max: 400,
        from: 0,
        to: 400,
        step: 10,
        prefix: "$",
        grid: false, // show/hide grid
        force_edges: false, // force UI in the box
        hide_min_max: false, // show/hide MIN and MAX labels
        hide_from_to: false, // show/hide FROM and TO labels
        block: false, // block instance from changing
    });

    //mixItUp category
    if ($(".product-page").length) {
        var mixer = mixitup(".product-page", {
            animation: {
                duration: 250,
                nudge: true,
                reverseOut: true,
                effects: "fade scale(1)",
            },
        });
    }
    // MixitUp
    if ($(".product__inner").length) {
        var mixer = mixitup(".product__inner");
    }
    //rateYo stars
    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "13px",
        spacing: "4px",
        normalFill: "#FFFFFF",
        readOnly: true,
    });
});