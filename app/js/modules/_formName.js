import {loadArti} from './_loaderArti.js';
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
  var loading = new SpeechSynthesisUtterance();
  loading.voiceURI = 'native';
  loading.volume = 1; // 0 to 1
  loading.rate = 1; // 0.1 to 10
  loading.pitch = 1; //0 to 2
  loading.text = 'Initiation of electronic platelets and cognitive links';
  loading.lang = 'en';
  speechSynthesis.speak(loading);
  $('.landing').fadeOut()
  $('.load-arti').css('display', 'flex')
  loadArti()
}
