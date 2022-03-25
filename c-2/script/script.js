$(document).ready(function(){
    //메뉴 슬라이드
    $('.submenu').stop().hide();
    $('.nav li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown();
    });
    $('.nav li').mouseout(function(){
        $(this).find('.submenu').stop().slideUp();
    });

    // 이미지 슬라이드 fadeIn/fadeOut
    $('.slide li').eq(0).show().siblings().hide();
    setInterval(function(){
        $('.slide li').eq(0).stop().fadeOut()
        .next().fadeIn()
        .end(1000).appendTo('.slide');
    },2500);

    // Popup Layer
    $('.popup').stop().hide();
    $('.notice li').eq(0).click(function(){
        $('.popup').stop().fadeIn('fast');
    });
    $('.p_btn').click(function(){
        $('.popup').stop().fadeOut('fast');
    });
});