export {navigationAction}

function navigationAction() {
  $('.navigation__home').on('click', function() {
    window.location.reload(false);
  })
  $('.navigation__about').on('click', function() {
    $('body').toggleClass('about__active');
  })
}
