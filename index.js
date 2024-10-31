// 상단메뉴고정

$(function () {
    $(document).ready(function () {

        var scrollOffset = $('.scroll-menu').offset();

        $(window).scroll(function () {
            if ($(document).scrollTop() > scrollOffset.top) {
                $('.scroll-menu').addClass('scroll-fixed');
            }
            else {
                $('.scroll-menu').removeClass('scroll-fixed');
            }
        });
    });
});

// swiper
var swiper = new Swiper('.gallery .gallery_inner ', {
    slidesPerView: 2.5,
    spaceBetween: 0,//갤러리 사이 간격
    speed: 1500,//버튼을 슬라이드가 넘어가는 시간
    autoplay: {
        delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
    navigation: {//화살표 버튼
        nextEl: '.gallery .swiper-button-next',
        prevEl: '.gallery .swiper-button-prev',
    },
    centeredSlides: true,
    
});