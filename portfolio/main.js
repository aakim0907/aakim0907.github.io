// Handle navbar click
$('ul li a').click(function() { 
  $('li a').removeClass("active"); 
  $(this).addClass("active"); 
});

// Hide and show navbar
$(document).ready(function () {
  $(".navbar").hide();

  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        $(".navbar").fadeIn(400);
      } else {
        $(".navbar").fadeOut(400);
      }
    });
  });
})
