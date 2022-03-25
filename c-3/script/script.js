$(document).ready(function(){
    // 메뉴 슬라이드
    $('.submenu').stop().hide();
    $('.nav ul li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown();
    });
    $('.nav ul li').mouseout(function(){
        $(this).find('.submenu').stop().slideUp();
    });

    // 이미지 슬라이드
    setInterval(function(){
        $('.slide').stop().animate({marginLeft:'-800px'},1000,function(){
            $('.slide li').eq(0).appendTo('.slide');
            $('.slide').stop().animate({marginLeft:0},0);
        });
    },2500);

    // Popup Layer
    $('.popup').stop().hide();
    $('.notice li').eq(0).click(function(){
        $('.popup').stop().fadeIn();
    });
    $('.p_btn').click(function(){
        $('.popup').stop().fadeOut();
    });
});