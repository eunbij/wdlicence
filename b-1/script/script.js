$(document).ready(function(){
    // 메뉴
    $('.submenu').stop().hide();
    $('.nav>ul>li').mouseover(function(){
        $('.submenu').stop().slideDown(500);
    });
    $('.nav>ul>li').mouseout(function(){
        $('.submenu').stop().slideUp(500);
    });

    // 이미지 슬라이드
    setInterval(function(){
        $('.imgwrap').stop().animate({
            marginLeft : '-1200px'
        },1000,function(){
            $('.imgwrap li').eq(0).appendTo('.imgwrap');
            $('.imgwrap').stop().animate({
                marginLeft : 0
            },0);
        });
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
        $('.popup').stop().fadeIn();
    });
    $('.p_btn').click(function(){
        $('.popup').stop().fadeOut();
    });

});