$(function () {
  const mainTL = gsap.timeline();
  mainTL.from('#header', { y: -100, autoAlpha: 0, duration: 1 });

  // Initialize the project slider
  const $tabMenu = $('.tab-menu > a');
  const $tabContent = $('.tab-con > div');

  $tabContent.hide().eq(0).show();

  $tabMenu.on('click', function (e) {
    e.preventDefault();

    const tIdx = $(this).index();

    $tabMenu.removeClass('on').eq(tIdx).addClass('on');
    $tabContent.hide().eq(tIdx).show();
  });

  const projectSliderWeb = new Swiper('.project-slider-web', {
    direction: 'vertical',

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    observer: true,
    observeParents: true,

    navigation: {
      nextEl: '.btn-next-white',
      prevEl: '.btn-prev-white',
    },
  });

  const projectSliderSub = new Swiper('.project-slider-sub', {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    observer: true,
    observeParents: true,
  });

  const footerTL = gsap.timeline({
    scrollTrigger: {
      trigger: '#footer',
      start: 'top bottom', // '#footer' top reaches viewport top
      markers: true, // Optional: adds visual markers for debugging
    },
  });

  footerTL.from('#footer', { y: 100, autoAlpha: 0, duration: 1 });
  $(document).ready(function () {
    var offset = 1080; // 탑 버튼이 나타날 스크롤 위치
    var duration = 500; // 애니메이션 시간

    $(window).scroll(function () {
      if ($(this).scrollTop() > offset) {
        $('.topButton').fadeIn(duration); // 스크롤 위치가 offset보다 크면 나타나기
      } else {
        $('.topButton').fadeOut(duration); // 그렇지 않으면 숨기기
      }
    });

    $('.topButton').click(function (event) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, duration); // 맨 위로 부드럽게 스크롤
      return false;
    });
  });

  // const $window = $(window);
  // let x = 0;
  // let y = 0;
  // let mx = 0;
  // let my = 0;
  // let speed = 0.09;

  // $window.on('mousemove', (e) => {
  //   x = Math.max(-100, Math.min(200, e.pageX - $window.innerWidth() / 2));
  //   y = Math.max(-10, Math.min(100, e.pageY - $window.innerWidth() / 2));
  //   /*  y = e.pageY - $window.innerHeight() / 2; */
  // });

  // function moving() {
  //   mx += (x - mx) * speed;
  //   my += (y - my) * speed;

  //   $('.swiper-slide > img').css({
  //     transform: `translate(${-mx * 0.4}px,-50%)`,
  //   });

  //   requestAnimationFrame(moving);
  // }
});
