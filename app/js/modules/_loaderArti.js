import {introduction} from './_introduction.js';

export {loadArti};

function loadArti() {

  var animation = bodymovin.loadAnimation({
    container: document.getElementById('loader-arti__bodymovin'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data/anim-loader.json'
  })

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
