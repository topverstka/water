const swiper = new Swiper('.main-slider', {
    slidesPerView: 1,
    loop: true,
  
    // autoplay: {
    //     delay: 5000,
    // },

    breakpoints: {
      768: {
        direction: 'vertical',
      }
    },
  
    pagination: {
      el: '.main-slider__pagination',
      clickable: true,
    },
});