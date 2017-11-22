$(function(){
  $('.miniature a').click(function(){                                  
    var images = $(this).find('img');
    var imgSrc = images.attr('src');
 
    $(".big-image img").attr({ src: imgSrc });                         
    $(this).siblings('a').removeClass('active');                       
    images.parent().addClass('active');                               
    return false;
  });
 
    $('.aside-nav a').click(function(e) {
        e.preventDefault();
        $('.aside-nav .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.tab').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
    });
 
})