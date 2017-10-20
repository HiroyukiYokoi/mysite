(function($) {
  'use strict';

  // SP メニュー開閉
  function HeaderMenuToggle() {
    var $window = $(window),
        $contents = $('.l-container'),
        $MenuBtn = $('.l-gNav__btn a'),
        scrollPosition = $window.scrollTop();

    $MenuBtn.on('click', function() {
      $(this).parents('.l-gNav').children('.l-gNav__wrap').toggleClass('is-open');
      $(this).parent('.l-gNav__btn').toggleClass('navOn');

      if (!$contents.hasClass('is-under')) {
        scrollPosition = $window.scrollTop();
      }
      $contents.toggleClass('is-under');
      if ($contents.hasClass('is-under')) {
        $contents.css('top', -scrollPosition + 'px');
      } else {
        $contents.css('top', '');
        $window.scrollTop(scrollPosition);
      }
      return false;
    });
  };

  // //ハンバーガーアイコン開閉
  // function hamburgerIcon() {
  //   $('.l-gNav__btn a').on('click', function() {
  //     $(this).parent('.l-gNav__btn').toggleClass('navOn');
  //   });
  // };

  //slick
  function mainVisualSlider() {
    $('.mainVisual__bgList').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    });
  };

  // トップへ戻るボタン
  function menuNavIcon() {
    $('.l-pagetop a').on('click', function() {
      $('html, body').animate({
        'scrollTop': 0
      }, 400);
    });
  };

  // リンク無効化
  function invalidHashLink() {
    $('a[href="#"]').on('click', function() {
      return false;
    });
  };

  HeaderMenuToggle();
  // hamburgerIcon();
  mainVisualSlider();
  menuNavIcon();
  invalidHashLink();
})(jQuery);
