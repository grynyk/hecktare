$(function() {
  $(window).on('load', function(event) {
    $('.preloader')
      .delay(2500)
      .fadeOut(600);
  });

  bodymovin.loadAnimation({
    container: document.getElementById('preloader-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/animations/preloader.json'
  });
  
  $(window).on('scroll', () => {
    const scroll = $(window).scrollTop();
    if (scroll < 10) {
      $('.navbar-container').removeClass('sticky');
    } else {
      $('.navbar-container').addClass('sticky');
    }
  });

  const scrollLink = $('.page-scroll');
  $(window).scroll(() => {
    const scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {
      let sectionOffset = 0;
      if ($(this.hash).offset()) {
        if ($(this.hash).offset().top) {
          sectionOffset = $(this.hash).offset().top - 130;
        }
      }
      if (sectionOffset <= scrollbarLocation) {
        $(this)
          .parent()
          .addClass('active');
        $(this)
          .parent()
          .siblings()
          .removeClass('active');
      }
    });
  });

  $('[href="#sidebar-open"], .sidebar-overlay').on('click', () => {
    $('.sidebar-container, .sidebar-overlay').addClass('open');
  });

  $('[href="#sidebar-close"], .sidebar-overlay').on('click', () => {
    $('.sidebar-container, .sidebar-overlay').removeClass('open');
  });

  $(() => {
    $('a.page-scroll[href*="#"]:not([href="#"])').on('click', function() {
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        $('.sidebar-container, .sidebar-overlay').removeClass('open');
        let target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate(
            {
              scrollTop: target.offset().top - 115
            },
            1000,
            'easeInOutExpo'
          );
          return false;
        }
      }
    });
  });


  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    focusOnSelect: true
  });
 
  $('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
  });
  new WOW().init();
});
