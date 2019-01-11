//  tab_menu.js

(function ($) {
 var winWidth= $(window).width(); //브라우저의 가로값
 var mobWidth=640; // 모바일 width를 640dmfh wnjfk 
 var nowDevice= '';
 

var myDevice = function(device){
 // if(winWidth <= mobWidth) {
  (device <= nowDevice) ?  nowDevice ='mobile':nowDevice ='pc'

  return nowDevice; // nowDevice를 반환하겠다. 
};

var beforeDevice = myDevice(winWidth);
  console.log(beforeDevice);

// =========================

var tabMenu=$('.tab_menu');
var deviceWidth= function (device) {
  // if(device <= mobWidth){ tabMenu.addClass('mob'); }else{ tabMenu.addClass('tab'); } // 모바일 보다 작다면 
 (device <= mobWidth) ? tabMenu.addClass('mob') : tabMenu.addClass('tab'); 
};

 // nowWidth이전에 device를 알려주는 

deviceWidth(winWidth);
//   ===================================


$(window).on('resize',function () { // 사이즈가 변한다면 
  var nowWinWidth = $(window).width(); // 가로 사이즈를 변한다면 
  var afterDevice=myDevice(nowWinWidth);

  if(winWidth !== nowWinWidth && beforeDevice !== afterDevice){
    location.reload();
  }  //가로  바뀐것이 같지 않다면 
   //  console.log(afterDevice);

  // location.reload(); // 새로고침해라 
  // 언제 새로고침을 할것인가 ?
 

  //deviceWidth(nowWinWidth); 
});

// tab menu 사용 
/*
step1. 타블렛영역 처리 
*/
var tablet= $('.tab');
var tabMenu=tablet.children('ul').children('li');
var tabCon=tablet.children('content');

tabMenu.on('click',function (e) {
  e.preventDefault();
  var _this=$(this)
  var index= _this.index();
 _this.addClass('active');// 해당번째의 active 클라스를 추가하고 
 _this.siblings('li').removeClass('active'); //나머지는 지워라 

  // tabCon.children('div').eq(index).hide(); //나머지는 숨겨라 (display :none)
  tabCon.children('div').eq(index).show();
  tabCon.children('div').eq(index).siblings('div').hide();

  // body...
});

tabMenu.find('a').on('focus',function (e) { //tab 에 포커스가 잡힌 상태라면 
 e.preventDefault();
 $(this).on('keyup',function (evt) { //티보드를 누르면 
  evt.preventDefault();
  // console.log(evt.keyCode); //a에 포커스가 잡히면 이때 해당번째의 키업이 되면  evt값을 처리해라 
   // 키보드가 tab 버튼일경우 다른 tab 메뉴로 이동하고 
   //  키보다가  화살표 좌, 우 방향키일경우 옆 버튼으로 이동
  //  tab 는 9번 , 왼방향키 37, 오른방향키 39
   
// var ek =evt.keyCode;

// if(ek == 9){}
// else if (ek == 37 || ek == 38){}
// else if (ek == 39 || ek == 40){}

//(ek ==9) ? /* 참  : / (ek == 37 )? /* */

 







  switch(evt.keyCode){ // 스위치 문 
    // case 9: // 키보드 탭키를 누ㄹ면 
    // $('.mob').find('li').eq(0).children('a').focus(); 
    // break;  // 처리하고 끝나면 

    case 37: //37번일 경우 
    case 38:
    $(this).parent().prev('li').children('a').focus(); //선택한 부모의 이전에 
    break;

    case 39:
    case 40: //또는 
    $(this).parent().next('li').children('a').focus(); // 오른쪽, 누르면 포커스 이동 
    break;
  }
  //  

 });
  // body...
});

  //  ==================

var moblie =$('.mob');
var mobMenu =moblie.children('ul');
var mobList =mobMenu.children('li');
var mobCon =mobMenu.find('.content');


mobList.on('click',function (e) {
  // e.stopPropagation();
  e.preventDefault();

var viewMenu=  mobMenu.hasClass('view') == false; //u1에  acitve 없으면 
if(viewMenu){
  mobList.show(); //display :block 을 보여라 
  mobMenu.addClass('view'); // ul이 보여지는 active 추가해줘서 보여주게 해라 
}else{ // 누르면 
var i = $(this).index(); // 보여지지 않다면 
// console.log(i);
mobCon.children('div').eq(i).show(); // div 의 해당 번째 
mobCon.children('div').eq(i).siblings('div').hide();

mobMenu.removeClass('view'); //u1에  view를 없애라 
mobList.eq(i).addClass('active');
mobList.eq(i).siblings('li').removeClass('active'); //activ로 삭제해서 
mobList.eq(i).siblings('li').hide();  // 선택된 나머지는 사라져라 
}

// mobList.slideDown();
// mobList.on('click',function (evt) { //메뉴가 열렸을때  선택하기 
//   evt.preventDefault();
//   // evt.stopPropagation();
//    // e.bubbles(false);
//    console.log(e.bubbles);
// var i = $(this).index();
// console.log(i);
//   // body...
// });

  // body...
});


})(jQuery);

