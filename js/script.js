$(function () {
  // Initialize the work slider
  gsap.registerPlugin(ScrollTrigger);
  const workSlider = new Swiper('.work-slider', {
    loop: true,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
  });
  // 메인헤더 애니메이션
  const mainTL = gsap.timeline();
  mainTL
    .from('#header', { y: -100, autoAlpha: 0, duration: 1 })
    .from('.visual-title h2', { y: +100, autoAlpha: 0, duration: 0.5 }, '-=0.3')
    .from(
      '.visual-title strong',
      { y: +100, autoAlpha: 0, duration: 0.5 },
      '-=0.3'
    )
    .from('.visual-title p', { y: +100, autoAlpha: 0, duration: 0.5 }, '-=0.3');

  // 어바웃 섹션 스크롤 트리거

  const aboutTL = gsap.timeline({
    defaults: { ease: 'power4.inOut' },
    scrollTrigger: {
      trigger: '.about',
      start: 'top 0', // .about-con-wrap's top reaches 80% of viewport height
      pin: true,
      pinSpacing: false,
      scrub: 1,
      markers: true,
    },
  });

  aboutTL.from('.about-con-wrap', { scale: 0.2, duration: 5 });
  aboutTL.from(
    '.about-con > *',
    {
      y: 100,
      autoAlpha: 0,
      duration: 4,
      stagger: 0.3,
    },
    '-=0.3'
  );
  aboutTL.to('.fake', { x: 1, duration: 15, delay: 10 });

  const workTL = gsap.timeline({
    defaults: { ease: 'power4.inOut' },
    scrollTrigger: {
      trigger: '.work',
      start: 'top 0', // .about-con-wrap's top reaches 80% of viewport height
      pin: true,
      // markers: true,
    },
  });

  workTL
    .from('.work-title > *', {
      y: 100,
      autoAlpha: 0,
      duration: 0.4,
      stagger: 0.2,
    })
    .from('.work-slider-wrap', {
      x: 100,
      autoAlpha: 0,
      duration: 0.4,
      delay: 0.1,
    });
});
