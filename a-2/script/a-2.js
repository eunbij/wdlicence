$(document).ready(function () {
    // 메뉴
    $('.submenu').stop().hide();
    $('.mainmenu li').mouseover(function(){
        $('.bg,.submenu').stop().slideDown();
    });
    $('.mainmenu li').mouseleave(function(){
        $('.bg,.submenu').stop().slideUp();
    });


    // 이미지 슬라이드
    setInterval(function(){
        $('.slidelist').stop().animate({
            marginLeft : '-1200px'
        },1000,function(){
            $('.slidelist li').eq(0).appendTo('.slidelist');
            $('.slidelist').stop().animate({
                marginLeft:0}
            ,0);
        });
    },2000);





    // 팝업 레이어
    $('.modal').hide();
    $('.notice li').eq(0).click(function(){
        $('.modal').stop().show();
    });
    $('.btn').click(function(){
        $('.modal').stop().hide();
    });
});