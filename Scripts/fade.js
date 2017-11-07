//Dziala dla ekranow powyzej 998 px
 $(window).on('load',function(){
     var userWidth = $(document).width();
     if(userWidth > 998){
        $(window).scroll(function(){
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $('.fade').each(function(){
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            if(objectBottom <= windowBottom){
                if($(this).css('opacity')==0){
                    $(this).fadeTo(500,1);
                }
            }
            else {
                if($(this).css('opacity')==1){
                    $(this).fadeTo(500,0);
                }
            }
        });
    });
     }
});   


