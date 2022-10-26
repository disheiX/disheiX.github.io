$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".hideme").each(function() {
        if ($(this).is(":visible")) {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight()}
        /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1)}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });