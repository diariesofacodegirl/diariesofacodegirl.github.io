$(window).scroll(function(){
    if($(this).scrollTop() > 400 && $(window).width() > 850){
      $('.arrows').hide();
      $('.header').css({'background': '#850a5274'});
    }
    if($(this).scrollTop() < 400){
        $('.arrows').show();
        $('.header').css({'background': 'transparent'});
      } 
});