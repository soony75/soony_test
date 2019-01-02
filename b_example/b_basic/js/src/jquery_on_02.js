//   jquery_on_02.js

(function($){
var enter=$('.mouseenter');
var over=$('.mouseover');
var num1=0;
var num2=0;

var enterOut= enter.children('.out');

var overOut= over.children('.out');



enter.on('mouseenter',function(){
 num1 +=1;
 enterOut.text(num1);

});

over.on('mouseover',function(){
 num2 +=1;
 overOut.text(num2);

});


// =============

// change

var sel = $('#sel');
sel.on('change',function(e){
e.preventDefault();

// var nar=$(this).val();
var nar = $(this).children('option:selected').text();
// 여기서 this는 주체가 되는 아이 (sel)

//선택된 (select 요소 내부의 option)요소의 겨우는 별도의 선택 되었을때(:selected) 경우를 지정해야 한다.

$('.change').find('p').text(nar);
});

//  scroll===============
var st=$(window).scrollTop();
console.log(st);
var pt =$('.position').offset().top;
console.log(pt); //--> scroll

$(window).on('scroll', function(){
  st=$(window).scrollTop();  // scrollTop(); ()안에 값을 넣으면 안됨

  // console.log('스크롤변경:',st);
  if(st >=pt){
    $('.fix').css({position:'fixed',top:0});
  }else{
    $('.fix').removeAttr('style');
  }
  $('body').css({backgroundColor:"#ccc"});
});



// offset={top:???,left:???}
// offset=function(){ top:....,left}
// scroll 이벤트 수행시 다음과 같은 메소드를 같이 알아야 한다.
// scrollTop :현재 스크롤바의 상단부분이 얼만큼 떨어져 있는지 파악
// offset().top :스트롤 탑이 최상단 0을 기준    offset().left

var porOffset =$('.por').offset().top;
var pofOffset =$('.pof').offset().top;
console.log(porOffset,'*',pofOffset);
$('.por').children('span').text(porOffset);
$('.pof').children('span').text(pofOffset);

$(window).on('scroll', function(){
 porOffset =$('.por').offset().top;
 pofOffset =$('.pof').offset().top;

console.log(porOffset,'*',pofOffset);
$('.por').children('span').text(porOffset);
$('.pof').children('span').text(pofOffset);


});

// swipe 기능 이해하기

// touchstart 터치가 시작되는 지점을 체크하는것 

$(window).on('touchstart',function(e){
 console.log(e);
});

})(jQuery);