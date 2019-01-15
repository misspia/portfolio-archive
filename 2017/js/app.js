$body = $('body');
loaderClass = 'loading';

$(document).ready(function(){

  setTimeout(function() {

    $body.removeClass(loaderClass);
  
  }, 3500);



  $('a[href*=\\#]').on('click', function(event){     

      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);

  
  });

});




// // https://github.com/lukehaas/Scrollify

