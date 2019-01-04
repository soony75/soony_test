//  toggle_01.js

(function ($) {
  var viewBox= $('.view_box');
  var viewP=viewBox.children('p');
  var timed =1000;
  
// show, hide
var showBtn = $('.btn_01_1');
var hideBtn = $('.btn_01_2');
var toggleBtn = $('.btn_01_3');

showBtn.on('click',function (e) {  e.preventDefault();  viewP.stop().show(timed); });

hideBtn.on('click',function (e) {  e.preventDefault();  viewP.stop().hide(timed); });

toggleBtn.on('click',function (e) {  e.preventDefault();  viewP.stop().toggle(timed); });







// fadeIn,fadeOut
var inBtn = $('.btn_02_1');
var outBtn = $('.btn_02_2');
var fadeBtn = $('.btn_02_3');

inBtn.on('click',function (e) {  e.preventDefault();  viewP.stop(false,true).fadeIn(timed); });

outBtn.on('click',function (e) {  e.preventDefault();  viewP.stop(false,true).fadeOut(timed); });

fadeBtn.on('click',function (e) {  e.preventDefault();  viewP.stop(false,true).fadeToggle(timed); });



// slideDown,slideUp,
var downBtn = $('.btn_03_1');
var upBtn = $('.btn_03_2');
var toggleBtn = $('.btn_03_3');


downBtn.on('click',function (e) {  e.preventDefault();  viewP.stop(false,true).slideDown(timed); });
upBtn.on('click',function (e) {  e.preventDefault();  viewP.stop(false,true).slideUp(timed); });
toggleBtn.on('click',function (e) {  e.preventDefault();  viewP.stop(false,true).slideToggle(timed); });

// addClass,removeClass
var addBtn = $('.btn_04_1');
var removeBtn = $('.btn_04_2');
var toggleBtn = $('.btn_04_3');


addBtn.on('click',function (e) {  e.preventDefault();  viewP.addClass('active'); });
removeBtn.on('click',function (e) {  e.preventDefault();  viewP.removeClass('active'); });
toggleBtn.on('click',function (e) {  e.preventDefault();  viewP.toggleClass('active'); });

// makeWidth,slideWidth,slideNarrow
var rot = $('.rotate');
var widthBtn=$('.btn_05_1');
var narroWBtn = $('.btn_05_2');
var slideWbtn = $('.btn_05_3');

widthBtn.on('click',function (e) {
  e.preventDefault();
  rot.stop().slideDown();
});
narroWBtn.on('click',function (e) {
  e.preventDefault();
  rot.stop().slideUp();
});
slideWbtn.on('click',function (e) {
  e.preventDefault();
  rot.stop().slideToggle();
});

// display:none--> 처음  없는 상태 
// display:block; width:0; overflow:hidden; padding-left:0 padding-right:0; ->
// width: 지정값; padding-left:사용값; padding-right:사용값; 





// 가로확인

var pWidth = viewP.width();// 수치로 나타남 
// padding확인
var ppl   = viewP.css('paddingLeft');
var pplInt = parseInt(ppl);
  var ppr   = viewP.css('paddingRight');
var pprInt = parseInt(ppr);

//상태를 나타냄  수치가 문자로 나타남  0px 
// 수치로 변환 시킴  
//상태를 나타냄  수치가 문자로 나타남  0px 
// right 값을 수치로 변수 정의 함 

// consoe.log(pWidth,pplInt,pprInt);

  var ppl   = viewP.css('paddingLeft');  // 수치가 문자로 나타남
  var pplInt = parseInt(ppl);
  var ppr   = viewP.css('paddingRight'); // 수치가 문자로 나타남
  var pprInt = parseInt(ppr);

// console.log(pWidht,pPad.left,pPad.right);
// 가로 슬라이드 보이기/ 사라지기
var viewWidth=$('.btn_06_1');
var closeWidth=$('.btn_06_2');



viewWidth.on('click',function(e){
    e.preventDefault();
    viewP.css({display:'block', width:0, paddingLeft:0, paddingRight:0, overflow:'hidden'});
      viewP.animate({width:pWidth, paddingLeft:pplInt, paddingRight:pprInt}, timed*2);
   
  });




 closeWidth.on('click',function(e) {
    e.preventDefault();
    viewP.animate({width:0, paddingLeft:0, paddingRight:0, overflow:'hidden'}, timed*2, function(){
      viewP.css({display:'none'});
    });
  });





})(jQuery);