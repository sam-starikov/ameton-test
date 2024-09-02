/* slider */

const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 4,
    navigation: {
        nextEl: '.faq__btn-next',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },

        480: {
            slidesPerView: 2,
        },

        780: {
            slidesPerView: 3,
        },
        960: {
            slidesPerView: 4,
        },
    },
})
