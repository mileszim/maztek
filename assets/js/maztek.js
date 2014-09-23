$(function() {
  $('body').scrollspy({ target: '.projects-sidebar' });

  $(window).on('load',function() {
    $('body').scrollspy('refresh');
  });
  
  
});