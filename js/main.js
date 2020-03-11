$(function(){
    'use strict';
    //Adjust Slider  Height
    var winH    =$(window).height(),
        upperH  =$('.upper-bar').innerHeight(),
        navH    =$('.navbar').innerHeight();
    $('.slider, .carousel-item').height( winH - ( upperH + navH ));

    //Featured word shuffle
    $('.featured-work ul li').on('click',function() {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all'){
            $('.shuffle-images .col-md').css('opacity','1');
        }else{
            $('.shuffle-images .col-md').css('opacity','0.1');
            $($(this).data('class')).parent().css('opacity','1');
        }
    });
});

