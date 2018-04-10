export {animationArti}

function animationArti() {

var timeout;
document.onmousemove = function(){
  clearTimeout(timeout);
  timeout = setTimeout(function(){
    $('.introduction__animation').attr('src', 'images/arti/arti_anim_1.gif');
  }, 10000);
}
document.body.onclick = function() {
  $('.introduction__animation').attr('src', 'images/arti/arti_anim_5.gif');
}

var counter = 0;
$('.introduction__animation').bind("click",function(){
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
          }, 4000);
        counter = 0;
      }
      else if(counter == 5) {
        console.log('5 click');
        $('.introduction__animation').attr('src', 'images/arti/arti_anim_3.gif');
        setTimeout(function(){
            $('.introduction__animation').attr('src', 'images/arti/arti_anim_5.gif');
          }, 4000);
        counter = 0;
      }
    }, 1000);
})

}
