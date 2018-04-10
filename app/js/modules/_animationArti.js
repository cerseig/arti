export {animationArti}

function animationArti() {

var counter = 0;
$('.introduction__animation').bind("click",function(){
    counter++;
    // if(counter == 1) {
    //   console.log('1 click');
    //     $('.introduction__animation').attr('src', 'images/arti/arti_anim_6.gif');
    //     setTimeout(function(){
    //         $('.introduction__animation').attr('src', 'images/arti/arti_anim_5.gif');
    //       }, 1000);
    //   counter = 0;
    // }

    setTimeout(function(){
      if(counter == 1) {
        console.log('1 click');
        $('.introduction__animation').attr('src', 'images/arti/arti_anim_6.gif');
        setTimeout(function(){
            $('.introduction__animation').attr('src', 'images/arti/arti_anim_5.gif');
          }, 1000);
        counter = 0;
      }
      if(counter == 3) {
        console.log('3 click');
        $('.introduction__animation').attr('src', 'images/arti/arti_anim_4.gif');
        setTimeout(function(){
            $('.introduction__animation').attr('src', 'images/arti/arti_anim_5.gif');
          }, 5000);
        counter = 0;
      }
      else if(counter == 5) {
        console.log('5 click');
        $('.introduction__animation').attr('src', 'images/arti/arti_anim_3.gif');
        setTimeout(function(){
            $('.introduction__animation').attr('src', 'images/arti/arti_anim_5.gif');
          }, 5000);
        counter = 0;
      }
    }, 1000);
})

  // $('.introduction__animation').on('click', function() {
  //   $(this).attr('src', 'images/arti/arti_anim_6.gif');
  //   setTimeout(function(){
  //     $('.introduction__animation').attr('src', 'images/arti/arti_anim_5.gif');
  //   }, 1000);
  // })

}
