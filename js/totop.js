(function($) {
$(function() {

  $('#totop').click(function() {
    $('html, body').animate({scrollTop: 0},1000);
    return false;
  });

});
})(jQuery)