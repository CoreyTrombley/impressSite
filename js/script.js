
$(document).ready(function() {
  
  $('#content').masonry({
   columnWidth: 210,
   itemSelector: '.box',
   isFitWidth: false,
   isResizable: true,
   gutterWidth: 0,
  }).imagesLoaded(function() {
   $('#content').masonry('reload');
   isAnimated: !Modernizr.csstransitions
  });

  $(".fancybox").fancybox();

});
