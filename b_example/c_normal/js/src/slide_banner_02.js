// slide_banner_02.js

(function($){
// console.log(' !!!!');
// jquery이용하여 슬라이드 광고배너를 만들기
// 기본 선택자 변수로 설정
var viewOuter = $('.view_banner_outer');
var viewIndi=$('.view_indicator').find('li');

// viewOuter.animate({marginLeft:-100+'%'});
 // step_01 인디케이터 버튼을 클릭하여 광고 이동하게 만들기
viewIndi.children('a').on('focus',function(e){// 여기 e를 거쳐서 아래 e로 간다. on은 이벤트 (클릭,마우스 다운,키보드 다운, 키 프레스 기능) , 포커스가 잡히면 아래기능을 해라 
  e.preventDefault();
  var _thisP=$(this).parent();// 선택했을때 그것 의 부모를 찾아라 // 여기의 this는 children('a')를 가리킨다.
  var _thisI=$(this).parent().index(); //index()해당 순서 위치를 파악하는 기능 // 몇번째인지  eq:주는거,지정0부터  =nth, index():내가 몇번째인지 알려주는것 
  viewIndi.removeClass('action'); // class='action'을 지워라 
  viewIndi.eq(_thisI).addClass('action'); //eq 순번에 class=action을 추가해라 

  console.log(_thisI);
  var _index =_thisI*100; // margin이 0이므로 -100% 만큼을 만들기 위해 
  viewOuter.animate({marginLeft:-_index+'%'}); // 

})



 // step_02 오른쪽 버튼 클릭하여 오른쪽 광고로 이동하게 만들기(step 5에서 다시 설정 )
/*var next =$('.next_btn');
var slideI =0;
next.on('click',function(e){
  e.preventDefault();
  slideI +=1;
  var _index =slideI*100;
  viewOuter.animate({marginLeft:-_index+'%'});

})
*/
 // step_03 왼쪽 버튼 클릭하여 이전 광고로 이동하게 만들기
//  var prev =$('.prev_btn');

// prev.on('click',function(e){
//   e.preventDefault();
//   slideI -=1;
//   var _index =slideI*100;
//   viewOuter.animate({marginLeft:-_index+'%'});

// })
 // step_04 해당광고의 끝으로 이동하면 버튼 사라ㄱ지게 만들기

      // var next =$('.next_btn');
      // var prev =$('.prev_btn');
      // var slideI =0;
      // var liLeng = viewIndi.length-1; // length는 갯수를 파악하는 것 0이면없다는 뜻
      // 
      // next.on('click',function(e){
        // e.preventDefault();
        // slideI +=1;
        // if(slideI>liLeng){ slideI = liLeng }
      // 
        // var _index =slideI*100;
        // viewOuter.animate({marginLeft:-_index+'%'});
      // 
      // })

         // 
        // prev.on('click',function(e){
          // e.preventDefault();
          // slideI -=1;
          // if(slideI <0){slideI = 0; } //slideI 가 0보다 작으면 slideI 
        // 
          // var _index =slideI*100;
          // viewOuter.animate({marginLeft:-_index+'%'});
        // 
//})




//  step_05 인디케이터와 순서값을 연동하여 처리되게 만들기 

    var next =$('.next_btn');
      var prev =$('.prev_btn');
      var slideI =0;
      var liLeng = viewIndi.length-1; // length는 갯수를 파악하는 것 0이면없다는 뜻
      
      next.on('click',function(e){
        e.preventDefault();
        slideI +=1;
        if(slideI>liLeng){ slideI = liLeng }
      
        var _index =slideI*100;
        viewOuter.animate({marginLeft:-_index+'%'});
      
      })

         
        prev.on('click',function(e){
          e.preventDefault();
          slideI -=1;
          if(slideI <0){slideI = 0; } //slideI 가 0보다 작으면 slideI 
        
          var _index =slideI*100;
          viewOuter.animate({marginLeft:-_index+'%'});




          viewIndi.removeClass('action'); // class='action'을 지워라 
  viewIndi.eq(_thisI).addClass('action'); //eq 순번에 class=action을 추가해라 

  console.log(_thisI);
  var _index =_thisI*100; // margin이 0이므로 -100% 만큼을 만들기 위해 
  viewOuter.animate({marginLeft:-_index+'%'}); // 



        
})

})(jQuery);