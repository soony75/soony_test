// menu_btn_01.js
/* */

//  함수 표현식(익명함수(이름이 없는 함수)를 변수에 대입처리 )
// var Fn = function(e){
//   return e + 5
// };

// 함수 선언식(함수자체에 이름을 생성 )
// function Fn2(e){ return e*2 }
// var b = Fn2(5);  
// // console.log(b);


// //잠깐 테스트

// var tt = ("sana" + "momo")+'jiyoun';


// // 즉시실행 함수(IIFE)

// (function(e){ 
//   var j=e *2 +3;
//   console.log(j);
//   return j;

//    })(3);


// 3을 인수에 맨앞 e 에 넣어서 실행 

// (function($){})(jQuery);

// ---------------------
// $(document).ready(function(){});

// html이 다 실행되면 그 다음에 펑션을 실행하라 



// jQuery 선택자
// *step1:
 // - css의 선택자형태와 똑같다.
 // - 단, css형태 그대로표현할 수는 없기에 $()를 감사야 한다
 // - 문자일 경우에는  ()안에 ''를 감싸주어야 한다.


//  step 1-----------------------------
 // var h1 = $('h1');
 // var mya = $('ul>li>a');
 // var dlChildDd =$('dl>dt+dd');
 // var lione = $('ul>li:nth-child');

 // step 2-----------------------------
/*
 -형제인지, 자식인자, 부모인지, 자손인지를 파악하여, 메소드형태로 나눠서 처리
 -순서를 나타날때에는 내부에서 처리하는 방법과, 외부에서 순서값을 작성하는 방법

*/
// var Go =function(a){ return  a+2; };
// var myobj= { coffee; 'americano'
//             come : Go
//           };

// var a = myobj.come(10);




(function($){// var mya = $('ul>li>a');

//   $('ul').children('li').children('a');

  var btn = $('.menu_btn_01');
  btn.css({padding:'1rem',borderTop:'1rem solid #fa0'});
 
  var dt =btn.children('dt');
  dt.css({backgroundColor:'#faa', color:'#177',fontStyle:'italic'});

  var dtChild = dt.children('button');
  dtChild.on('mouseenter',function(){
    $(this).css({backgroundColor:'#555',color:'#fff'});
  });


  dtChild.on('mouseleave',function(){
    $(this).removeAttr('style');

  });

// --------------------------
var show = $('.show');
var hide = $('.hide');
var btnDd = btn.find('dd');
// show를 클릭시 dd를 나타나게 만들기 
show.on('click',function(e){
  e.preventDefault();
btnDd.slideDown();
});

hide.on('click',function(evt){
  evt.preventDefault();
btnDd.slideUp(5000);
});
//-------------------------

var dual= $('.dual')
dual.on('click',function(e){
   e.preventDefault();
  // 
/*  var status = btnDd.css('display');
console.log(status);
if(status !== 'none'){

  //display 상태가 none이 아니라면 
  btnDd.slideUp(500);
}else{
  btnDd.slideDown(500);
}
*/

btnDd.slideToggle(500)
});

// hide를 클릭시 dd를 사라지게 만들기


})(jQuery);













