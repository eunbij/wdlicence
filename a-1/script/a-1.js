$(function(){
    // 서브 메뉴
    $('.mainmenu>li').mouseover(function(){
        // $(this).children().siblings('ul').stop().slideDown('slow');
        $('.submenu').stop().slideDown(500);
    });
    $('.mainmenu>li').mouseout(function(){
        $('.submenu').stop().slideUp(500);
    });
    

    // 이미지 슬라이더 구현
    /* $('.slide li:gt(0)').hide();
    setInterval(function(){
        $('.slide li:first-child').fadeOut()
        .next('li').fadeIn()
        .end().appendTo('.slide');
    },2000);
 */
    start();
    var imgs = 2;
    var now = 0;

    function start(){
        // $('.slide li').eq(0).siblings().css({'margin-left':'-2400px'});
        $('.slide li').eq(0).siblings().stop().animate({'margin-top':'-300px'});
        setInterval(function(){
            now == imgs ? now = 0 : now += 1;
            // now = now == imgs ? 0 : now += 1;
            // $('.slide li').eq(now-1).css({'margin-left':'-2400px'});
            $('.slide li').eq(now-1).stop().animate({'margin-top':'-300px'});
            $('.slide li').eq(now).stop().animate({'margin-top':'0px'});

        },2000);
    };



    // 탭메뉴
    $('.tab_btn li').click(function(){
        var idx = $(this).index();
        $('.tab_btn li').removeClass('on');
        $(this).addClass('on');
        $('.tab_contents .list').stop().hide();
        $('.tab_contents .list').eq(idx).stop().show();
    });
    
    // 모달
    $('.list ul li:first').click(function(){
        $('.modal').css({'display':'block'});
    });
    $('#btn').click(function(){
        $('.modal').css({'display':'none'});
    }); 
    

    

    


});



// 이미지 슬라이딩 함수 실행(별도 호출 없이 로딩 후 실행시키는 방법)
// start();
// // 변수 선언
// var imgs = 3;
// var now = 0;

// function start() {
//     $(".slide ul li").eq(0).siblings().css({
//         "margin-left": "-9900px"
//     });
//     setInterval(function(){slide();}, 2000);
// }
// function slide() {
//     now == imgs ? now = 0 : now += 1;
//     $(".slide li").eq(now - 1).css({
//         "margin-left": "-1200px"
//     });
//     $(".slide li").eq(now).css({
//         "margin-left": "0px"
//     });
// }
