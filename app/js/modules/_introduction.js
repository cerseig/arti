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
          $('.introduction__comment-2').replaceWith('<div class="introduction__comment-2">Lorem ipsum dolor sit amet, dolor sit amet toti doesmo dolor sit amet toti doesmo, dolor sit amet toti doesmo, dolor sit amet toti doesmodo lor sit amet toti doesmo, it amet toti doesmo, dolor sit amet toti doesmo, dolor sit amet toti doesmodo lor sit amet toti doesmo</div>')
        }
        if($(this).attr('data-type') == "2-2") {
          console.log('no');
        }
      })

    }

  })


}
