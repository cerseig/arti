export {formValidName, getName}

function formValidName() {
  $('#submitName').on('click', function() {
    getName()
    hideFormName()
  });
  $('#name').on('keypress', function(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        getName()
        hideFormName()
    }
  })
}

function getName() {
  var name = $('#name').val();
  console.log(name);
}

function hideFormName() {
  $('.landing').fadeOut();
  $('.load-arti').css('display', 'flex')
}
