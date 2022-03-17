$(document).ready(function(){
    // GNB메뉴
    $('.submenu').stop().hide();
    $('.nav>ul>li').hover(function(){
        $(this).children().eq(1).stop().slideDown();
    },function(){
        $(this).children().eq(1).stop().slideUp();
    });

    // 이미지 슬라이드
    var num = 0;
    $('.imgslide li').stop().hide();
    $('.imgslide li').eq(0).stop().show();
    setInterval(function(){
        $('.imgslide li').eq(0).fadeOut()
        .next().fadeIn().end(1000)
        .appendTo('.imgslide>ul')
    },2000);

    // 탭메뉴
    // $('.gallery').stop().hide();
    $('.tabbtn ul li').click(function(){
        var index = $(this).index();
        $('.tabbtn ul li').removeClass('active');
        $(this).addClass('active');
        $('.tabctn .list').stop().hide();
        $('.tabctn .list').eq(index).stop().show();
    });

    // 팝업레이어
    $('.popup').stop().hide();
    $('.tabctn .notice li').eq(0).click(function(){
        $('.popup').stop().fadeIn('slow');
    });
    $('.pbtn').click(function(){
        $('.popup').stop().fadeOut('slow');
    });
});

