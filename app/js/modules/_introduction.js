export {introduction};

function introduction() {

  var name = $('#name').val();
  $('.introduction__comment-1').append('Hello '+ name +', my name is Arti.')
  $('.introduction__comment-2').append('Have you ever heard about affective computing ?')

}
