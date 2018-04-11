export {introduction};

function introduction() {

  var name = $('#name').val();

  var intro = new SpeechSynthesisUtterance();
  intro.voiceURI = 'native';
  intro.volume = 1; // 0 to 1
  intro.rate = 1; // 0.1 to 10
  intro.pitch = 2; //0 to 2
  intro.text = 'Hello '+ name +', my name is Arti. Have you ever heard about affective computing ?';
  intro.lang = 'en';
  speechSynthesis.speak(intro);

  // var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
  // var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
  // var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
  //
  // var recognition = new SpeechRecognition();
  // recognition.lang = 'en-US';
  // recognition.interimResults = false;
  // recognition.maxAlternatives = 1;

  // document.body.onclick = function() {
  //   recognition.start();
  // }

  // var answer = 0;
  //
  // recognition.onresult = function(event) {
  //   var last = event.results.length - 1;
  //   answer = event.results[last][0].transcript;
  //   console.log(answer);
  // }
  //
  // recognition.onspeechend = function() {
  //   recognition.stop();
  // }

  $('.introduction__comment-1').append('Hello '+ name +', my name is Arti.')
  $('.introduction__comment-2').append('Have you ever heard about affective computing ?')


  $('button').on('click', function() {

    speechSynthesis.cancel();

    $('.introduction__comment-1').css('display', 'none')
    $('.introduction__comment-2').replaceWith('<div class="introduction__comment-2">Do you want to know what it is?</div>')
    $('.introduction__anwsers-2').css('display','none')


    if($(this).attr('data-type') == "1-1" || $(this).attr('data-type') == "1-2" || $(this).attr('data-type') == "1-3") {

      intro.text = 'Do you want to know what it is?';
      speechSynthesis.speak(intro);

      $('.introduction__anwsers-1').attr('data-type', '2-1');
      $('.introduction__anwsers-3').attr('data-type', '2-2');

      $('button').on('click', function() {

        speechSynthesis.cancel();

        if($(this).attr('data-type') == "2-1") {
          $('.introduction__comment-1').css('display', 'block')
          $('.introduction__comment-1').replaceWith('<div class="introduction__comment-1">This is for you a short summary of what is affective computing</div>')

          intro.text = 'This is for you a short summary of what is affective computing. Affective Computing (also called "Artificial emotional intelligence") can be divided into 3 main topics, which are: display, identification and synthesis. For an IA to interact naturally with a user, it is obligate to go through these 3 phases.';
          speechSynthesis.speak(intro);

          $('.introduction__comment-2').replaceWith('<div class="introduction__comment-2 next">Affective Computing (also called "Artificial emotional intelligence") can be divided into 3 main topics, which are: display, identification and synthesis. For an IA to interact naturally with a user, it is obligate to go through these 3 phases.<img src="images/icons/next.svg" class="comment-next"></div>')

          $('.comment-next').on('click', function() {
            $('.introduction__comment-2').replaceWith('<div class="introduction__comment-2">IEA (Artificial Emotional Intelligence) brings together various fields of research such as information, psychology and cognitive science (study of interactions between technologies and feelings).')

            intro.text = 'IEA (Artificial Emotional Intelligence) brings together various fields of research such as information, psychology and cognitive science (study of interactions between technologies and feelings).';
            speechSynthesis.speak(intro);

          })
          $('.introduction__anwsers-3').css('display', 'none')
          $('.introduction__anwsers-1').attr('data-type', '3-1');
          $('.introduction__anwsers-1').html('Thanks!')
          $('button').on('click', function() {
            speechSynthesis.cancel();
            if($(this).attr('data-type') == "3-1") {
              $('.introduction').fadeOut();
              $('.page-section').fadeIn();
            }
          })
        }
        if($(this).attr('data-type') == "2-2") {
          $('.introduction__anwsers-2').css('display','block')
          $('.introduction__comment-1').css('display', 'block')
          $('.introduction__anwsers-1').replaceWith('<button class="introduction__anwsers-1 introduction__anwsers-picture" data-type="3-1"><div class="answer__picture" style="background-image:url(\'images/movies/bee_bots.jpg\')"></div><div class="answer__text">Pollenizer bee-bots</div></button>')
          $('.introduction__anwsers-2').replaceWith('<button class="introduction__anwsers-2 introduction__anwsers-picture" data-type="3-2"><div class="answer__picture" style="background-image:url(\'images/movies/rate_me.png\')"></div><div class="answer__text">Real life rate system</div></button>')
          $('.introduction__anwsers-3').replaceWith('<button class="introduction__anwsers-3 introduction__anwsers-picture" data-type="3-3"><div class="answer__picture" style="background-image:url(\'images/movies/be_right_back.png\')"></div><div class="answer__text">Humanoid AI</div></button>')
          $('.introduction__comment-1').replaceWith('<div class="introduction__comment-1">Ah, are you clever? So will you be able to answer this quick test?</div>')
          $('.introduction__comment-2').replaceWith('<div class="introduction__comment-2">Which of these three systems is qualified as affective computing?</div>')

          intro.text = 'Ah, are you clever? So will you be able to answer this quick test? Which of these three systems is qualified as affective computing?';
          speechSynthesis.speak(intro);

          $('button').on('click', function() {

            speechSynthesis.cancel();

            if($(this).attr('data-type') == "3-3"){
              $('.introduction__anwsers-1').replaceWith('<button class="introduction__anwsers-1" data-type="4-1">Yeaaaah!</button>')
              $('.introduction__anwsers-2').css('display', 'none')
              $('.introduction__anwsers-3').css('display', 'none')
              $('.introduction__comment-1').html('Well done, you are not too bad.. You can finally access to the timeline')

              intro.text = 'Well done, you are not too bad.. You can finally access to the timeline';
              speechSynthesis.speak(intro);

              $('.introduction__comment-2').css('display', 'none')
              $('button').on('click', function() {
                if($(this).attr('data-type') == "4-1") {
                  speechSynthesis.cancel();
                  $('.introduction').fadeOut();
                  $('.page-section').fadeIn();
                }
              })
            }
            if($(this).attr('data-type') == "3-1" || $(this).attr('data-type') == "3-2"){
              $('.introduction__comment-1').replaceWith('<div class="introduction__comment-1">Ahahah you are not so smart as you think! This is for you a little gift for your knowledge.</div>')

              intro.text = 'Ahahah you are not so smart as you think! This is for you a little gift for your knowledge. Affective Computing (also called "Artificial emotional intelligence") can be divided into 3 main topics, which are: display, identification and synthesis. For an IA to interact naturally with a user, it is obligate to go through these 3 phases.';
              speechSynthesis.speak(intro);

              $('.introduction__comment-2').replaceWith('<div class="introduction__comment-2 next">Affective Computing (also called "Artificial emotional intelligence") can be divided into 3 main topics, which are: display, identification and synthesis. For an IA to interact naturally with a user, it is obligate to go through these 3 phases.<img src="images/icons/next.svg" class="comment-next"></div>')
              $('.comment-next').on('click', function() {
                $('.introduction__comment-2').replaceWith('<div class="introduction__comment-2">IEA (Artificial Emotional Intelligence) brings together various fields of research such as information, psychology and cognitive science (study of interactions between technologies and feelings).')

                intro.text = 'IEA (Artificial Emotional Intelligence) brings together various fields of research such as information, psychology and cognitive science (study of interactions between technologies and feelings).';
                speechSynthesis.speak(intro);

              })
              $('.introduction__anwsers-3').css('display', 'none')
              $('.introduction__anwsers-1').attr('data-type', '4-1');
              $('.introduction__anwsers-1').replaceWith('<button class="introduction__anwsers-1" data-type="4-1">Thanks!</button>')
              $('.introduction__anwsers-2').css('display','none')
              $('.introduction__anwsers-3').css('display','none')
              $('button').on('click', function() {
                if($(this).attr('data-type') == "4-1") {
                  speechSynthesis.cancel();
                  $('.introduction').fadeOut();
                  $('.page-section').fadeIn();
                }
              })
            }
          })
        }
      })

    }

  })


}
