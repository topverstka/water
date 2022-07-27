const swiper = new Swiper('.main-slider', {
    slidesPerView: 1,

    breakpoints: {
      1024: {
        direction: 'vertical',
      }
    },
  
    pagination: {
      el: '.main-slider__pagination',
      clickable: true,
    },
});