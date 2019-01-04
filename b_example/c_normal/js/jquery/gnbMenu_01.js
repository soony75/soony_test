// gnbMenu_01.js

(function ($) {
  var gnb = $('#gnb').find('dl');
  var gnbDt =gnb.children('dt');
  var gnbDd =gnb.children('dd');

// dd에 자식인 a에 focus가 잡히면 그 부모의 바로 뒤에 있는 dd를 보이게 해라.
  gnbDt.children('a').on('click',function (e) {
// console.log('li');
    // 2. 그 부모의 바로뒤에 있는 dd를 보이게 해라
    e.preventDefault();
    //  dd들은 감춰라
    var nextDd= $(this).parent('dt').next('dd');// 선택한 a의 부모의 아래에 있는 dd
    gnbDd.stop(false,true ).fadeOut(); // dd들이 안보이게 
    nextDd.stop(false,true ).fadeIn(); // dd들이 보이게 
/*
show(), hide()
fadeIn(),fadeOut(),fadeToggel()
slideDown(),slideUp(),slideToggle()
*/

// 그런데, 내용중에 마지막 a가 blur 처리가 된다면, 해당dd는 사라져라.
    var ddLast=nextDd.find('a').eq(-1);
      // 2. blur처리가 된다면
    ddLast.on('blur',function () {
      // 3. 해당dd는 사라져라
      nextDd.slideUp();
      // ...
    }); 

     });

 
// 마지막 a 요소에서 포커스가 빠져나간다면, 그 부모의 바로뒤에 잇는 dd를 사라지게 해라 
// 1. dt에서 자식인 a가 포커스가 빠저나간다면,

// console.log(gnbDd.find('a').length);
// gnbDd.find('a').eq(-1).on('blur',function (e) {

//   var nextDd=$(this).parents('dd');
//    nextDd.slideUp();
//   });

//  다른 dd들도 마지막 포커스이후 사라지게 하자
//  for(var i=0; i<10; i+=1){}

/*  

forEach()
forEach는 배열 형식에서 가각 상황에 따라 수행할 경에 쓴 기능 메소드.

ex)
var arr =[1,3,6,9,10];
for(var i=0; i<arr.length; i+=1)

위와 아래는 같은 코드  data는 arr의 값 index는 순서값  java 스트립트라 모두 먹는다. 값을 확인하고 순서를 나중에 
arr.foreach(function(data, index){
  console.log(data, index);
});

$.each(arr,function(i,d){
  console.log(i,d);

  순서 index 가 먼저나오고 data 값은 나중에 나온다.
});

  */
// [2]
  // 각 dd의 마지막 a에 포커스가 빠저나가면 해당 dd를 사라지게 해라

// console.log(gnbDd); 
// 1.각각 dd의
// $.each(gnbDd, function (index,data) {
//  // console.log(index, data ); 
//  var li=data.find()
// });

// dl에 마우스가 빠져나간다면 모든 dd를 사라지게 만들어라

$('#headBox').on('mouseleave',function (e) {
 gnbDd.slideUp();
});
})(jQuery);


/* 
slideDown()
display:none에서 시작

height:0

display:block; height:0; 


height:10rem; transition:height timed linear;


slideUp()
height:10rem; transition:height
height:0
display:none


 */



