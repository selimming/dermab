$(document).ready(function(){
    
    const swiper = new Swiper('.swiper_box1 .swiper', {
        // Optional parameters
        // direction: 'vertical',
        slidesPerView: 3,
        spaceBetween: 30,
        slidePerGroup: 2,
        loop: true,
    
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        breakpoints: {
    
            360: {
            slidesPerView: 1,
            spaceBetween: 20,
            },
            400: {
            slidesPerView: 1,
            spaceBetween: 20,
            },
            500: {
            slidesPerView: 1,
            spaceBetween: 20,
            },
            790: {
            slidesPerView: 3,
            spaceBetween: 40,
            },
            1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            },
        },
    
        // And if we need scrollbar
        scrollbar: {
        el: '.swiper-scrollbar',
        },
    });
    });