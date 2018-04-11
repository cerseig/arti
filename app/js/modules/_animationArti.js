export {animationArti}

function animationArti() {

  $('.introduction__arti-event').mousedown(function(e) {
    clearTimeout(this.downTimer);
    this.downTimer = setTimeout(function() {
        console.log('caresse done');
        $('.introduction__animation').attr('src', 'images/arti/arti_anim_2.gif');
    }, 1000);
  }).mouseup(function(e) {
      clearTimeout(this.downTimer);
      $('.introduction__animation').attr('src', 'images/arti/arti_anim_1.gif');
  });

  var timeout;
  document.onmousemove = function(){
    clearTimeout(timeout);
    timeout = setTimeout(function(){
      $('.introduction__animation').attr('src', 'images/arti/arti_anim_1.gif');
    }, 10000);
  }

  var counter = 0;
  $('.introduction__arti-event').on('click',function(){
      counter++;
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
            }, 3000);
          counter = 0;
        }
        else if(counter == 5) {
          console.log('5 click');
          $('.introduction__animation').attr('src', 'images/arti/arti_anim_3.gif');
          setTimeout(function(){
              $('.introduction__animation').attr('src', 'images/arti/arti_anim_5.gif');
            }, 3000);
          counter = 0;
        }
      }, 1000);
  })

}
