//   jquery_on_04.js
(function($){

 var num=0;
  //일반적으로 0
  var winH= $(window).height();
  // console.log(winH); 
  $(window).scrollTop(0);
  // 각 div 요소의  offset값을 확인

  var divOffset =[];
var wrapChild=$('#wrap').children('div');
  // divOffset[0]=$('.layout_01').children().eq(0).offset().top;
  // divOffset[1]=$('.layout_02').children().eq(1).offset().top;
  // divOffset[2]=$('.layout_03').children().eq(2).offset().top;
 var i=0;
 for (; i<wrapChild.length; i++){
  divOffset[i]=wrapChild.eq(i).offset().top;
  // console.log(divOffset);
 }


  // var arr=[];
  // arr[0]='사과';
  // arr[1]='망고'; 이런식으로 나중에 설치 가능 

  // =====================
$(window).on('mousewheel DOMMouseScroll',function(e){
  // firefox를 제외한 (mousewheel기능을 가진) 브라우저는 wheelDelta값을 가지고 있다.

  // console.log(e.originalEvent.wheelDelta);//  120,-120 수치를 가짐
  
  //  firefox 브라우저는 detail 수치값을 가지고 있다.
  // console.log(e.originalEvent.detail);

  var evt=e.originalEvent;
  var delta="";

  // console.log(evt.detail == 0);
  if(!evt.detail == 0){
  delta = evt.detail * - 40;
  } else{
    delta=evt.wheelDelta;
  }
 if (delta < 0 && num < wrapChild.length){
  num += 1
  // $('body').scrollTop(divOffset[++num]);
 }else if( delta > 0 && num >0){
  num -= 1;
}
  $('html,body').animate({scrollTop:divOffset[num] });
 
});

})(jQuery);