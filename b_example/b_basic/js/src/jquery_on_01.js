

// jquery_on_01.js


(function($){

$('h1').animate({backgroundColor:'#fa0',height:70, padding:'1rem'},500,'easeInOutBounce');

// var h1 =document.getElementsByTagName('h1')[0];
// h1.style.backgroundColor='#fa0';
// h1.style.height=100;
// h1.style.color='#fff';


var btnUl=$('.btn_area');
var btnLi=btnUl.children('li');
var span =$('p>span');

btnLi.on('click',function(e){
  e.preventDefault();
  span.text('일단 클릭했습니다.');
});


btnLi.on('dblclick',function(e){
  e.preventDefault();
  var  mythis = $(this).index();
  // console.log(mythis);
span.text('선택된 li는 '+ (mythis+1) +'번째 입니다.');

});


var mouse=$('.mouse');
mouse.on('mousedown', function(e){
  e.preventDefault();
var num= e.which;
/* if(num == 1){
  $(this).children('span').text('마우스 왼버튼을 눌렀습니다.');
}else if (num==2){
  $(this).children('span').text('마우스 가운데버튼 눌렀습니다.');
}else if (num==3){
  $(this).children('span').text('마우스 오른 눌렀습니다.');
}else{

$(this).children('span').text('그런버튼 안킴움.');
} */

switch(num){
case 1:
$(this).children('span').text('마우스 왼버튼을 눌렀습니다.');
break;

case 2:
$(this).children('span').text('마우스 가운데버튼 눌렀습니다.');
break;

case 3:
$(this).children('span').text('마우스 오른 눌렀습니다.');
break;

default:
$(this).children('span').text('그런버튼 안킴움.');

}
});

mouse.on('mouseup', function(e){
  e.preventDefault();

 $(this).children('span').text('마우스를 띄었습니다.'); 
});


var fc= $('.focus');
var fcList= fc.children('li');
fcList.children().on('focus ',function(){

$(this).css({backgroundColor:'#07a',color:'#fff', fontWeight:'bold'});

});

fcList.children().on('blur',function(){
$(this).removeAttr('style');

});

fcList.children().on('mouseenter ',function(){

$(this).css({backgroundColor:'#999'});

});
fcList.children().on('mouseleave',function(){
$(this).css({backgroundColor:'#fa0'});

});
//  ==========================

$('#key').on('keypress',function(e){
console.log(e);
  });

$('#key2').on('keyup',function(e){
// console.log(e.key.toString().toLowerCase() );
console.log(e.keyCode);

switch(e.keyCode){
  case 37:
  $(this).css({backgroundColor:'#f06'});
  break;
    case 38:
  $(this).css({backgroundColor:'#06f'});
  break;
  case 39:
  $(this).css({backgroundColor:'#6f0'});
  break;
  case 40:
  $(this).css({backgroundColor:'#faf'});
  break;
}
});
// =====================
//  브라우저의 화면이 크기가 변형되었을때  (땨옴표를 쓰지 않는다.)
// $(window)
// $(document) 
// $(this)
var ww=$(window).width();
console.log(ww);

$(window).on('resize', function(){
  $('#wrap').css({backgroundColor:'#ca9'});
var nw=$(window).width();
console.log(nw);

if(ww !== nw ){
location.reload();

  //위치바뀌면 리로드 해라 f5 와 같다. 

}
});

})(jQuery);