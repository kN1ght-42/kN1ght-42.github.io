const sliderSwiper = new Swiper(".slider__wrapper__inner", {
    navigation: {
        nextEl: ".arrow__button.next",
        prevEl: ".arrow__button.prev",
    },
    wrapperClass: "slider__items",
    slideClass: "slider__item",

    pagination: {
        el: ".slider__pagination",
        bulletClass: "slider__pagination__item",
        bulletActiveClass: "slider__pagination__item--active",
    },

    breakpoints: {
        1200: {
            spaceBetween: 20,
            slidesPerView: "2",
        },
        600: {
            spaceBetween: 10,
        },
        1: {
            spaceBetween: 5,
        },
    },
});
