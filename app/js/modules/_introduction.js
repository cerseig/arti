export {introduction};

function introduction() {

  var name = $('#name').val();
  $('.introduction__comment-1').append('Hello '+ name +', my name is Arti.')
  $('.introduction__comment-2').append('Have you ever heard about affective computing ?')

  $('button').on('click', function() {
    $('.introduction__comment-1').css('display', 'none')
    $('.introduction__comment-2').replaceWith('<div class="introduction__comment-2">Do you want to know what it is?</div>')
    $('.introduction__anwsers-2').css('display','none')

    if($(this).attr('data-type') == "1-1" || $(this).attr('data-type') == "1-2" || $(this).attr('data-type') == "1-3") {
      $('.introduction__anwsers-1').attr('data-type', '2-1');
      $('.introduction__anwsers-3').attr('data-type', '2-2');

      $('button').on('click', function() {
        if($(this).attr('data-type') == "2-1") {
          $('.introduction__comment-1').css('display', 'block')
          $('.introduction__comment-1').replaceWith('<div class="introduction__comment-1">This is for you a short summary of what is affective computing</div>')
          $('.introduction__comment-2').replaceWith('<div class="introduction__comment-2 next">Affective Computing (also called "Artificial emotional intelligence") can be divided into 3 main topics, which are: display, identification and synthesis. For an IA to interact naturally with a user, it is obligate to go through these 3 phases.<img src="images/icons/next.svg" class="comment-next"></div>')
          $('.comment-next').on('click', function() {
            $('.introduction__comment-2').replaceWith('<div class="introduction__comment-2">IEA (Artificial Emotional Intelligence) brings together various fields of research such as information, psychology and cognitive science (study of interactions between technologies and feelings).')
          })
          $('.introduction__anwsers-3').css('display', 'none')
          $('.introduction__anwsers-1').attr('data-type', '3-1');
          $('.introduction__anwsers-1').html('Thanks!')
          $('button').on('click', function() {
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

          $('button').on('click', function() {
            if($(this).attr('data-type') == "3-3") {
              $('.introduction__anwsers-1').replaceWith('<button class="introduction__anwsers-1" data-type="4-1">Yeaaaah!</button>')
              $('.introduction__anwsers-2').css('display', 'none')
              $('.introduction__anwsers-3').css('display', 'none')
              $('.introduction__comment-1').html('Well done, you are not too bad.. You can finally access to the timeline')
              $('.introduction__comment-2').css('display', 'none')
              $('button').on('click', function() {
                if($(this).attr('data-type') == "4-1") {
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
