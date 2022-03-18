$(document).ready(function(){
    // 메뉴 슬라이드
    $('.bgcolor,.submenu').stop().hide();
    $('.nav>ul>li').mouseover(function(){
        $('.bgcolor,.submenu').stop().slideDown();
    });
    $('.nav>ul>li').mouseout(function(){
        $('.bgcolor,.submenu').stop().slideUp();
    });

    // 이미지 슬라이드
    $('.imgslide li').stop().hide();
    $('.imgslide li').eq(0).stop().show();
    setInterval(function(){
        $('.imgslide li').eq(0).fadeOut()
        .next().fadeIn()
        .end(1000).appendTo('.imgslide ul');
    },2000);

    // 팝업 레이어
    $('.popup').stop().hide();
    $('.contents .notice li').eq(0).click(function(){
        $('.popup').stop().fadeIn('fast');
    });
    $('.popup .btn').click(function(){
        $('.popup').stop().fadeOut('fast');
    });

});