$(function () {
  // GSAP
  // GSAP ScrollTrigger 플러그인 등록

  // Initialize the project slider
  const projectSlider = new Swiper('.project-slider', {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: {
      invert: false,
    },
  });

  // 메인 헤더 애니메이션
  const mainTL = gsap.timeline();
  mainTL
    .from('#header', { y: -100, autoAlpha: 0, duration: 1 })
    .from('.me h2', { y: 100, autoAlpha: 0, duration: 0.5 }, '-=0.3');

  // about-me 섹션 애니메이션
  const aboutMeTL = gsap.timeline({
    defaults: { ease: 'power4.inOut' },
    scrollTrigger: {
      trigger: '.about-me-wrap',
      start: 'top 0', // .about-me의 상단이 뷰포트 상단에 도달할 때
      pin: true,
      scrub: 1,
      markers: true,
    },
  });

  aboutMeTL
    .from('.about-me-con > *', {
      y: 100,
      autoAlpha: 0,
      duration: 0.6,
      stagger: 0.2,
    })
    .from('.about-me-info > *', {
      y: 100,
      autoAlpha: 0,
      duration: 0.6,
      delay: 0.2,
    });

  gsap.utils.toArray('.word-keyword').forEach((item) => {
    gsap.to(item, {
      transform: 'rotateX(-10deg) scale(0.9)',
      transformOrigin: 'top',
      // filter: 'brightness(0.3)',
      autoAlpha: 0,
      duration: 1,
      delay: 0.5,
      y: 200,

      // 스크롤츠리거 세팅
      scrollTrigger: {
        trigger: item,
        // markers: true,
        start: 'top 30%',
        toggleActions: 'play none reverse reverse',
        // pin: true,
      },
    });
  });
});