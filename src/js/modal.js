$(document).ready(function() {
  var button = $('#button');
  var buttonTwo = $('#button__2');
  var modal = $('#modal');/* оставил на будущюю реализацию */
  var close = $('#close');
  var wrap = $('#wrapper');

  var timer; /* переменная, принимающая таймер */

  button.on('click', function() {
    wrap.fadeIn();
    OffScroll ();
    timer = setTimeout(function() { 
      wrap.fadeOut();
      $(window).unbind('scroll');
    }, 5000);
  });

  buttonTwo.on('click', function() {
    wrap.fadeIn();
    OffScroll (); /* вызываем функцию остановки прокрутки */
    /* задаем таймер закрытия окна через 5 сек */
    timer = setTimeout(function() { 
      wrap.fadeOut();
      $(window).unbind('scroll');
    }, 5000);
  });

  close.on('click', function() {
    wrap.fadeOut();
    clearTimeout(timer); /* отчищаем переменную таймер */
    $(window).unbind('scroll'); /* снова позволяем прокрутку сайта */
  });
});

/* функция остановки прокрутки во время появления модального окна без убирания самой полосы прокрутки */
function OffScroll () {
  var winScrollTop = $(window).scrollTop();
  $(window).bind('scroll',function () {
    $(window).scrollTop(winScrollTop);
});}


