$(function () {
  const workSlider = new Swiper('.work-slider', {
    // Optional parameter
    // autoplay: {
    //   delay: 1000,
    // },
    loop: true,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.btn-prev',
      prevEl: '.btn-next',
    },
  });
});
