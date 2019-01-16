(function ($) {
  // body...

  console.log('??');
var gnb =$('.brand_box06').find('dl');
var gnbDt= gnb.children('dt');
var gnbDd= gnb.children('dd');

gnbDt.children('a').on('click',function (e) {
  // body...
  e.preventDefault();
  var nextDd= $(this).parent('dt').next('dd');
  var nextView = nextDd.css('display') == 'block'; // block상태라면 
  $(this).parents('dl').siblings().find('dd').stop(false,true).slideUp();

  if(nextView){
    nextDd.stop(false,true).slideUp();
  }else{
    nextDd.stop(false,true).slideDown();
  }

});

// nextDd.addClass('active');
// var dtButton=_this.parent().siblings('dt').children('a');
// dtButton.removeClass('active');




// gnbDt.on('blur',function (e) {
//   // body...
//   var dd=_
// })
  



})(jQuery);