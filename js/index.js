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


$(document).ready(function() {
    // Function to set width of boxes to match the width of the 'Ideation & Brainstorm' h2 element
    function setBoxWidth() {
        var h2Width = $('h2:contains("Ideation & Brainstorm")').outerWidth();
        $('.box').css('width', h2Width);
    }

    // Call the function initially and on window resize
    setBoxWidth();
    $(window).resize(setBoxWidth);
});
