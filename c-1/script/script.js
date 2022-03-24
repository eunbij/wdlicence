$(document).ready(function(){
    // 메뉴 슬라이드
    $('.submenu').stop().hide();
    $('.nav li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown();
    });
    $('.nav li').mouseout(function(){
        $(this).find('.submenu').stop().slideUp();
    });

    // 이미지 fadeIn/Out
    $('.slide li').stop().hide();
    $('.slide li').eq(0).stop().show();
    setInterval(function(){
        $('.slide li').eq(0).fadeOut()
        .next().fadeIn()
        .end(1000).appendTo('.slide');
    },2500);

    // 탭 메뉴
    $('.tabcontents>ul>li').eq(-1).stop().hide();
    $('.tabbtn>ul>li').click(function(){
        var idx = $(this).index();
        $('.tabbtn>ul>li').removeClass('on');
        $(this).addClass('on');
        $('.tabcontents .list').stop().hide();
        $('.tabcontents .list').eq(idx).stop().show();
    });

    // 팝업 레이어
    $('.popup').stop().hide();
    $('.notice li').eq(0).click(function(){
        $('.popup').stop().show();
    });
    $('.p_btn').click(function(){
        $('.popup').stop().hide();
    });
});