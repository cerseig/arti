import {introduction} from './_introduction.js';

export {loadArti};

function loadArti() {

  $('.load-arti__counter').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
  });
  setTimeout(function () {
    $('.load-arti').fadeOut()
    $('.introduction').fadeIn()
    introduction()
  }, 4000);

}
