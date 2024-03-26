console.log("Your index.js file is loaded correctly!");

$(document).ready(function() {
    $('.nav-item').on('click', function() {
        console.log("Nav item clicked!");
        // Update the 'selected' class for nav items
        $('.nav-item').removeClass('selected');
        $(this).addClass('selected');

        // Update the underline position and display it
        $('.nav-underline').css({
            'width': $(this).outerWidth(),
            'left': $(this).position().left,
            'display': 'block'
        });
    });
});


$(document).ready(function() {
  $('.down-arrow').on('click', function(event) {
      event.preventDefault(); // Prevent default anchor behavior
      $('html, body').animate({
          scrollTop: $('#next-section').offset().top
      }, 1000);
  });
});
