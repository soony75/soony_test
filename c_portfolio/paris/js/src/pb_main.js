// pb_main.js
(function($){
// console.log(' !!!!');
  var wrap=$('#wrap');
  var allUrl='./all/';
  var head=$('head');


head.append('<title>파리바게뜨</title>');

wrap.prepend('<header id="headBox"></header>');
wrap.append('<footer id="footBox"></footer>');


var headBox = $('#headBox');
var footBox = $('#footBox');
var link =function (file,url,fileName) {

  // 

  var f = file  || 'header' ;

  var u = url  || allUrl;
  var fn = fileName || '.html';

  var result = u +f+ fn;
  // console.log(result);
  return result;


};

headBox.load(allUrl+'header.html');
footBox.load(link('footer'));




  // sectBox01
  var viewOuter = $('.se01_banner_outer, pro_bg ');
  var viewIndi=$('.se01_indicator').find('li');
  
  
   // 인디케이터 버튼을 클릭하여 광고 이동
  viewIndi.children('a').on('focus',function(e){
    e.preventDefault();
    var _thisP=$(this).parent();
    var _thisI=$(this).parent().index();   
    viewIndi.removeClass('action'); 
    viewIndi.eq(_thisI).addClass('action'); 
  
    console.log(_thisI);
    var _index =_thisI*100;
    viewOuter.animate({marginLeft:-_index+'%'}); // 

  });
  // 인디케이터와 순서값을 연동하여 처리
      var next =$('.next_btn');
      var prev =$('.prev_btn');
      var slideI =0;
      var liLeng = viewIndi.length-1; // 
      
      next.on('click',function(e){
        e.preventDefault();
        slideI +=1;
        if(slideI>liLeng){ slideI = liLeng }
      
        var _index =slideI*100;
        viewOuter.animate({marginLeft:-_index+'%'});
      });

         
      prev.on('click',function(e){
        e.preventDefault();
        slideI -=1;
        if(slideI <0){slideI = 0; } 
      
        var _index =slideI*100;
        viewOuter.animate({marginLeft:-_index+'%'});
        viewIndi.removeClass('action'); 
        viewIndi.eq(_thisI).addClass('action');

        console.log(_thisI);
        var _index =_thisI*100; 
        viewOuter.animate({marginLeft:-_index+'%'});         
        });


 


})(jQuery);