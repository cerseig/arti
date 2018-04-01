export {loadProject}

function loadProject() {
  $('.loader__counter').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
  });
  setTimeout(function () {
    $('.loader').fadeOut()
    $('.landing').css('display', 'flex')
  }, 2000);
}
