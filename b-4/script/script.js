$(document).ready(function(){
    // 메뉴 슬라이드
    $('.submenu,.bgcolor').stop().hide();
    $('.nav>ul>li').mouseover(function(){
        $('.submenu,.bgcolor').stop().slideDown();
    });
    $('.nav>ul>li').mouseout(function(){
        $('.submenu,.bgcolor').stop().slideUp();
    });


    // 이미지 좌우 슬라이드
    setInterval(function(){
        $('.slide').stop().animate({marginLeft:'-1200px'},1000,function(){
            $('.slide li').eq(0).appendTo('.slide');
            $('.slide').stop().animate({marginLeft:0},0);
        });
    },2500);

    // 팝업레이어
    $('.popup').stop().hide();
    $('.notice li').eq(0).click(function(){
        $('.popup').stop().fadeIn('fast');
    });
    $('.p_btn').click(function(){
        $('.popup').stop().fadeOut('fast');
    });
});