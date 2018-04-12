export {animationArti}

function animationArti() {

  $('.arti-event').mousedown(function(e) {
    clearTimeout(this.downTimer);
    this.downTimer = setTimeout(function() {
        console.log('caresse done');
        var happy = new Audio("sounds/happy.wav");
        happy.play();
        $('.arti-robot').attr('src', 'images/arti/arti_anim_2.gif');
    }, 500);
  }).mouseup(function(e) {
      clearTimeout(this.downTimer);
      $('.arti-robot').attr('src', 'images/arti/arti_anim_1.gif');
  });

  $('.conclusion').mousedown(function(e) {
    clearTimeout(this.downTimer);
    this.downTimer = setTimeout(function() {
        console.log('caresse done');
        var happy = new Audio("sounds/happy.wav");
        happy.play();
        $('.arti-robot').attr('src', 'images/arti/arti_anim_2.gif');
        setTimeout(function() {
            $('.timeline__conclusion').css('bottom', '50px')
        }, 800);
        $('.timeline-container').css('display', 'none')
        $('.timeline-divider').css('display', 'none')
        $('.timeline__conclusion').css('display', 'block')
    }, 500);
  }).mouseup(function(e) {
      clearTimeout(this.downTimer);
      $('.arti-robot').attr('src', 'images/arti/arti_anim_1.gif');
  });


  $('.timeline__conclusion').on('click', function() {
    $(this).css('bottom', '-600px')
    setTimeout(function() {
        $('.timeline__conclusion').css('display','none');
        $('.timeline-container').css('display', 'block')
        $('.timeline-divider').css('display', 'block')
    }, 800);
  })

  var timeout;
  document.onmousemove = function(){
    clearTimeout(timeout);
    timeout = setTimeout(function(){
      var dodo = new Audio("sounds/dodo.wav");
      dodo.play();
      $('.arti-robot').attr('src', 'images/arti/arti_anim_1.gif');
    }, 10000);
  }

  var counter = 0;
  $('.arti-event').on('click',function(){
      counter++;
      setTimeout(function(){
        if(counter == 1) {
          console.log('1 click');
          var aie = new Audio("sounds/aie.wav");
          aie.play();
          $('.arti-robot').attr('src', 'images/arti/arti_anim_6.gif');
          setTimeout(function(){
              $('.arti-robot').attr('src', 'images/arti/arti_anim_5.gif');
            }, 1000);
          counter = 0;
        }
        if(counter == 3) {
          console.log('3 click');
          var pleure = new Audio("sounds/pleure.wav");
          pleure.play();
          $('.arti-robot').attr('src', 'images/arti/arti_anim_4.gif');
          setTimeout(function(){
              $('.arti-robot').attr('src', 'images/arti/arti_anim_5.gif');
            }, 3000);
          counter = 0;
        }
        else if(counter == 5) {
          console.log('5 click');
          var enerve = new Audio("sounds/enerve.wav");
          enerve.play();
          $('.arti-robot').attr('src', 'images/arti/arti_anim_3.gif');
          setTimeout(function(){
              $('.arti-robot').attr('src', 'images/arti/arti_anim_5.gif');
            }, 3000);
          counter = 0;
        }
      }, 1000);
  })

}
