$(document).ready(function(){
    // 메뉴 슬라이드
    $('.submenu').stop().hide();
    $('.nav li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown();
    });
    $('.nav li').mouseout(function(){
        $(this).find('.submenu').stop().slideUp();
    });

    // 상하 이미지 슬라이드
    setInterval(function(){
        $('.slide').stop().animate({marginTop:'-300px'},function(){
            $('.slide li').eq(0).appendTo('.slide');
            $('.slide').css({marginTop:0});
        });
    },2000);

    // PopUp
    $('.popup').stop().hide();
    $('.notice li').eq(0).click(function(){
        $('.popup').stop().fadeIn('fast');
    });
    $('.p_btn').click(function(){
        $('.popup').stop().fadeOut('fast');
    });
});