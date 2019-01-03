// accordion_01.js

(function($){
  var accordion =$('.accordion')
  var accorBtn= accordion.find('dt').children('button');
  var accorDd= accordion.find('dd');
  // console.log(accorBtn,accorDd);


accorDd.eq(0).show();
accorBtn.eq(0).addClass('active');

// accorDd.css({display:'none'});
//  html(css)에서 주지 않았다면 js에서 준다.

accorBtn.on(' focus',function (e) {
  e.preventDefault();
  var _this=$(this);
  var dd = _this.parent().next('dd');
  // $(this)선택한 상태의 부모의  뒤에 오는 dd를 
 // dd.css({display:'block'}); // display를 dd로 넣어준다.
 dd.slideDown();
 // dd.slideToggle();
 
 var ddS=dd.siblings('dd'); //  dd의 나를 뺀 나머지 형제 
 // ddS.css({display:'none'});
 // ddS.removeAttr('style'); // 스타일  속성을 날려 주는
 ddS.slideUp(); 

 // -----------------
 // accorBtn.removeClass('active');
 _this.addClass('active');
 var dtButton= _this.parent().siblings('dt').children('button');
 dtButton.removeClass('active');
});

accorBtn.on('blur',function () {
  var _this=$(this);
 var dd= _this.parent().next('dd');
 _this.removeClass('active');
  dd.slideUp();
});




})(jQuery);