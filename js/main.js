$(document).ready(function(){
    
 
//★★★★★★★li에 mouseover 하면 sub 메뉴 나오게
$('header .gnb li, .con .subGnb').on('mouseover', function(){    
    var num = $(this).index();
    $('header .gnb li').eq(num).addClass('on').siblings().removeClass('on');
    $('.con .subGnb').eq(num).stop().slideDown().siblings().hide();
}).on('mouseout', function(){
    var num = $(this).index();
    $('.con .subGnb').eq(num).stop().slideUp();
    $('header .gnb li').removeClass('on');
    
})//li mouseout

    

//★★★★★★★윈도우 높이값에 섹션 높이값 맞추기
    
    function reHeight(){
        var wHeight = $(window).height();
        $('section').height(wHeight);}//함수
    
    reHeight(); // 전역실행
    $(window).on('resize',function(){
        reHeight();
    })//resize  // resize 될때마다 실행       
  
    
//★★★★★★★mousewheel 하면 다음 섹션 넘어가게
    $('section').on('mousewheel', function(e,d){
       
        if(d<0){
            var next= $(this).next().offset().top;
            $('html, body').stop().animate({
                'scrollTop':next
            }, 700)
        }//if
        else if(d>0){
            var prev = $(this).prev().offset().top;
            $('html, body').stop().animate({
                'scrollTop':prev
            }, 700)
        }//else
        
    })//mousewheel
    
    
//★★★★★★★slide
    
    $('.slideIn').bxSlider({
         'minSlides' : 1, //최소 너비값일때 보일 슬라이드 갯수(모바일 사이즈), 반응형 옵션 넣어줘야함
         'maxSlides' :1, // 보일 슬라이드 갯수의 최대값 (최대 3개 슬라이드만 보이도록)
         'auto':true,
         'slideWidth':1100,  //캐러셀 아이템들 너비값(3개씩 움직임)
         'slideHeight':500,  //캐러셀 아이템들 너비값(3개씩 움직임)
         'moveSlides':1, //한번에 움직일 아이템들 개수(1개씩 움직이도록)
         'nextSelector':'.slideBtn .next', //버튼연결
         'prevSelector':'.slideBtn .prev', //버튼 연결
         'prevText':'', //기존 텍스트 삭제
         'nextText':'', //기존 텍스트 삭제
         'pager':false, //기존 텍스트 삭제
         /*'touchEnabled':false,*/
    })//slide
    
    
//★★★★★★★tab li 클릭하면 menu, event box바뀌기
    
    $('.section2 .tab li').on('click',function(){
        $(this).addClass('on').siblings().removeClass('on')
        
        var num = $(this).index()
        $('.event .box').eq(num).fadeIn().siblings().fadeOut()
        $('.menu').eq(num).fadeIn().siblings().fadeOut()
        $('.sectionTit span').eq(num).addClass('on').siblings().removeClass('on')
    })//li click
    

    
//footer slide
    
        var sLength = $('.infoIn').length;
        var pLength = $('.pBtn').length;
        var nb = 0;
    
    $('.section4 .next').on('click',function(){
        var next = (nb+1) % sLength; 
        var nxt = (nb+1) % pLength; 
        $('.infoIn').eq(nb).fadeOut();
        $('.infoIn').eq(next).fadeIn();
        $('.pBtn').eq(nxt).addClass('on').siblings().removeClass('on');
        
        nb=next;
        
    })//next. click
    
    $('.section4 .prev').on('click',function(){
        var prev = (nb+2) % sLength; 
        var prv = (nb+2) % pLength;
        $('.infoIn').eq(nb).fadeOut();
        $('.infoIn').eq(prev).fadeIn();
        $('.pBtn').eq(prv).addClass('on').siblings().removeClass('on');
        
        nb=prev;
        
    })//next. click
    
    
    $('.midas .pager .pBtn').on('click',function(e){
        e.preventDefault();
        var pn = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.section4 .infoIn').eq(pn).fadeIn().siblings().fadeOut();
        
        
    })//pager.click
    
    
    
    
})//오프닝