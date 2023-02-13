$(document).ready(function(){
    $('.row').imagesLoaded().progress( function() {
   
      $('.row').masonry('layout');
      
    });
});
