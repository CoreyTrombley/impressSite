
$(document).ready(function() {
  
  $('#content').masonry({
   columnWidth: 220,
   itemSelector: '.box',
   isFitWidth: true,
   isResizable: false,
  }).imagesLoaded(function() {
   $('#content').masonry('reload');
   isAnimated: !Modernizr.csstransitions
  });

  $(".fancybox")
    .attr('rel', 'gallery')
    .fancybox({
        padding : 0
    });

});
