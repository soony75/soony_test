
(function ($) {
  // 기능1: header 기능이 스크롤처리해서 상단에 올라오면 position:fixed처리 
  var win= $(window);
  var headBox =$('#headBox');
  var headOffset=headBox.offset().top;
  var headCon =headBox.find('.container');
  var gnb =headBox.find('#gnb');
  // var headDd= headBox.find('dd');
  var winH=win.height();
  var scrollOffset= 0;  // 지역변수에 있던 scrollOset을  변수로 선언 함 

  // 스크롤 처리시 
  win.on('scroll',function (e) {
    scrollOffset=$(this).scrollTop();
    // 스크롤양과, headOffset의 크기값을 비교하여 처리
    var vs =headOffset <= scrollOffset;
    (vs) ?      headBox.css({position:'fixed',top:0,bottom:'auto'}) :  headBox.removeAttr('style');
    // if(vs) {      headBox.css({position:'fixed',top:0,bottom:'auto'}); }else{  headBox.removeAttr('style');}
   // 화면의 높이를 기준으로 절반아래로 header가 있으면 위로 하위메뉴가 나오게 처리 
    var heightVs = scrollOffset < winH/2; // 크거나 같다면 
      // console.log(heightVs); //올라가면 true.. 내려오면 false
    if(heightVs){
      headCon.addClass('up');
      // heightVs의 값이 false인경우
    }else{
      // heightVs
      headCon.removeClass('up');
    }
  });
 
  // 기능1의 2번재 처리: header 메뉴에 마우스 올리거나 focus 되었을때 하위 메뉴는 나타나야 하는가?
   var addView =function (e) {
    e.preventDefault();
    headCon.addClass('view');
       // body...
  };
 var removeView =function (e) {
    e.preventDefault();
    headCon.removeClass('view');
       // body...
  };

  gnb.on({'mouseenter': addView , 'mouseleave':  removeView    });


  // 기능1의 부차적 문제 : header 위착 하단에 있는경우와 상단에 있는 경우에 따라,
  //  하위 메뉴는 상황에따라 보이는 형태가 달라야 하지 않을까?
//  전체를 기준으로 봐야 하는데 ? 이 전체는 어는 크기 일까? $('window')

})(jQuery);