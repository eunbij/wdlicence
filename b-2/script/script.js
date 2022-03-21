$(document).ready(function(){
    // 메뉴
    $('.gnbbg,.submenu').stop().hide();
    $('.nav>ul>li').mouseover(function(){
        $('.gnbbg,.submenu').stop().slideDown();
    });
    $('.nav>ul>li').mouseout(function(){
        $('.gnbbg,.submenu').stop().slideUp();
    });

    // 이미지 위아래 슬라이드
    setInterval(function(){
        $('.slide').stop().animate({marginTop:'-300px'},function(){
            $('.slide li').eq(0).appendTo('.slide');
            $('.slide').css({marginTop:'0px'});
        });
    },2000);

    // 레이어 팝업
    $('.popup').stop().hide();
    $('.notice').click(function(){
        $('.popup').stop().fadeIn('fast');
    });
    $('.p_btn').click(function(){
        $('.popup').stop().fadeOut('fast');
    });

});