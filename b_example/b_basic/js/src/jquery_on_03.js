//  jquery_on_03.js

(function($){
var btn1=$('.btn').children('button').eq(0);
var btn2=$('.btn').children('button').eq(1);
var viewBox=$('.view_box');
btn1.on('click',function(e){
  e.preventDefault();
  viewBox.css({ transform:'translate(0)',
                transition:'all 300ms ease'});

});

btn2.on('click',function(e){
  e.preventDefault();
  viewBox.css({ transform:'translate(-50%)',
                transition:'all 300ms ease'});
});

var start='';
var end='';

// 터치 시작 과 끝  기능으로 처리


$(window).on('touchstart',function(e){
  start = e.touches[0].pageX;

 // console.log('터치시작:',start);


});

$(window).on('touchend',function(e){
 end= e.changedTouches[0].pageX;
console.log('터치끝 ',end);
console.log('결과:',end - start)


 var result = end - start;
 if(result < 0){
  // viewBox.css({transform:'translate(-50%',              transition:'all 300ms ease'});
  btn2.trigger('click');
}else if (result>0){
  // viewBox.css({transform:'translate(0)',              transition:'all 300ms ease'}); 
  btn1.trigger('click');
}


});

//  브라우저 크기값 계산 
var winW= $(window).width();
$(window).on('touchmove',function(e){
 console.log( e.originalEvent.touches[0].pageX);
 var move =e.originalEvent.touches[0].pageX / winW * 100;
 $('.view_box').css({transform:'translate('+ -move/2 +'%)' });

});

if(winW >800 ){

  $(window).off('touchmove');
} 



 // var y= e.touches[0].pageY;
 // console.log('터치끝:',x);

// clientX, clientY      ->브라우저 기준 좌표
// offsetX, offsetY      ->이벤트 대상요소의 상대적 좌표 (ex . view_box 처럼 )
// pageX, pageY          ->문서 전체를 기준 좌표(ex )
// screenX,screen        ->모니터 화면기준의 좌표위치(듀얼의 경우)
})(jQuery);