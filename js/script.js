
$(document).ready(function() {
  
  $('#content').masonry({
   columnWidth: 220,
   itemSelector: '.box',
   isFitWidth: false,
   isResizable: true,
  }).imagesLoaded(function() {
   $('#content').masonry('reload');
   isAnimated: !Modernizr.csstransitions
  });

  $(".fancybox").fancybox();

});
