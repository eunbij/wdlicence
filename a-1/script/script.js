$(document).ready(function(){
    //메뉴 슬라이드
    $('.submenu').hide();
    $('.nav li').mouseover(function(){
        $('.submenu').stop().slideDown();
    });
    $('.nav li').mouseout(function(){
        $('.submenu').stop().slideUp();
    });

    //이미지 슬라이드
    setInterval(function(){
        $('.slide').stop().animate({marginTop:'-300px'},function(){
            $('.slide li').eq(0).appendTo('.slide');
            $('.slide').css({marginTop:0},0);
        });
    },2500);

    //탭 메뉴
    $('.list').eq(-1).stop().hide();
    $('.tabbtn li').click(function(){
        var idx = $(this).index();
        $('.tabbtn li').removeClass('on');
        $(this).addClass('on');
        $('.tabcontents .list').hide();
        $('.tabcontents .list').eq(idx).show();
    });

    //팝업레이어
    $('.popup').stop().hide();
    $('.notice li').eq(0).click(function(){
        $('.popup').stop().fadeIn();
    });
    $('.p_btn').click(function(){
        $('.popup').stop().fadeOut();
    });
});