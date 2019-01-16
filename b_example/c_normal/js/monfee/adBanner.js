(function (argument) {
  var banner= $('#adBanner');
  var viewOuter= banner.find('.view_outer');
  var viewBanner= viewOuter.find('ul');
  var viewBannerList=viewBanner.children('li');

  // adBanner 영역의 구성을 변경
  //  기존의 갯수에서 마지막 하나를 복제하여 앞에 배치 
  // (css문서에서 nth-child로 배경이미지를 처리하면 안된다. 즉, 각각 이름을 부여해서 처리)
var viewBannerLast= viewBannerList.eq(-1).clone(true); // true 전체를 갖고 온다. 
viewBannerList.eq(0).before(viewBannerLast);
viewBanner.prepend(viewBannerLast); // 부모에서 아예 처음에 넣어라

// 내용 변경 후 갯수 다시 파악 (복제 한것을 알지 못하기 때문에 ....실제 5개가 아닌 6개가 나와야 함)
viewBannerList =viewBanner.children('li');
 
  //  감싸는 영역의 크기를 갯수 *100% 크기만큼으로 변경
  var len= viewBannerList.length;
  // console.log(viewBannerList);
viewBanner.css({width:len * 100 +'%', marginLeft: -100 +'%',position:'relative',top:0, left:0});  //ul은 width:len *100% ,-100% 이동시킴 ,left:0으로 relative로 설정 
 // transition:'left 500 +ms+ ease '
viewBannerList.css({width: 100/ len+'%'}); // li다시 갯수를 6개로 바꾼다. 

  //  첫번재 보이는 요소는 첫배너로 처리하기 위해  전체를 복제된 요소를 왼쪽으로 이동
// 좌, 우  버튼을 클릭하든, 인디케이트를 클릭하든 공통의 기능을 하는 변수가 하나 필요하다.!
var showI = 0;
var btnArea =banner.find('.arrow_btn');
var nextBtn= btnArea.children('.next_btn'); 
var prevBtn= btnArea.children('.prev_btn');
var indicator= banner.find('.indicator');
var indiLi=indicator.find('li');

var SlideBanner =function (i) {
  // body...
indiLi.removeClass('active');
indiLi.eq(showI).addClass('active'); // 아래있던 
viewBanner.stop(true,false).animate({left: i * -100 +'%'},500); //showI 가 바뀔때마다 
};
//0번째 를 보이게 해야되는 5번째가 나옴 그래서 marginLeft -100% 해서 원래 첫번째 ban_1 이 보이게 한다.

SlideBanner(showI); // 함수만 동작하게 만들고자 함수안으로 넣지 않음 \\

// 좌,우 버튼 클릭시 
nextBtn.on('click',function (e) {
  // body...
  e.preventDefault();
 

  if(showI >= len-2){
    

      viewBanner.css({left: 100 +'%'}); //콜백기능 (function){} 이 없다. 
      showI =0
      SlideBanner(showI);
      // indiLi.removeClass('active');
      // indiLi.eq(showI).addClass('active');
      // viewBanner.animate({left: showI * -100 +'%'});


    // $(this).hide();
  }else{
    showI +=1;
   SlideBanner(showI);
  }
  // console.log(showI);

});

// nextBtn클릭시  변수 showI에 1씩 더하는 기능 부여
// 최대 숫자는 전체 갯수 -2까지만 가능 

/* prevBtn.on('click',function (e) {
  // body...
  e.preventDefault();
  
  if(showI <= -1){
    showI=-1;  // showI 는  -1이다. 라고 정해버림 
    }else{
      showI -=1;
    }
console.log(showI);
SlideBanner(showI);
//  prevBtn클릭시 변수 showI에 1씩 빼는 기능 부여 
// 최소 숫자를 -1까지만 가능 

}); */


// 2차 기능처리
/* prevBtn.on('click',function (e) { // 이전버튼을 클릭하면 
e.preventDefault();
  if(showI <= 0){   //하나 - 되면서 
    showI=-1; // 
    viewBanner.css({left:showI * -100 +'%'});  //5로 가라 
    // 0.5초 뒤에마지막 위치로 이동 

    //  setTimeout() 일정 시간 후에 수행하라  
    setTimeout(function () { 
     showI =len-2; // 마지막 문서로 가라 
     viewBanner.css({left:showI * -100 +'%', transition:'none'}); //transition 을 위에서 썻기 때문에 5번재 이미지를 1변 자리에 넣고 4번이 보이게  transition을 썼기 때문에 이것을 없애라 .
     setTimeout(function () {
       // body...
     viewBanner.css({transition:'left 500ms ease'}); //transition 을 위에서 썻기 때문에 5번재 이미지를 1변 자리에 넣은것을 보이지 앟게 하겠다. 0 처럼 
     },10); //100분의1초 뒤에 수행하게 해주세요 
     

    }, 500); // 0.5초 만큰 갔기 때문에 0.5초  뒤에 수행하라 
     
     

    }else{
      showI -=1;
      SlideBanner(showI);
    }

});
*/

//3차 기능
prevBtn.on('click',function (e) {
e.preventDefault();

if( showI <=0){
showI = -1; //
indiLi.removeClass('active');
indiLi.eq(showI).addClass('active'); // 아래있던 
viewBanner.stop(true,false).animate({left:showI * -100 +'%'},500, function () {
  // 현재는 아이는 -1 *-100% 해서 100% 그래서  맨앞에 있는 5 ;
  showI = len-2;
  // showI를 마지만 번째에 있는 아이로 바꾸고 
  viewBanner.css({left:showI * -100 + '%'})
});

}else{
showI -= 1;
SlideBanner(showI);  // 처음의 상황에서 1을 보여주고 
  
}


});

// 인디케이터

// console.log(indiLi.length);
indiLi.on('click',function (e) {
  // body...
  e.preventDefault();
  var showI =$(this).index(); // 몇번재 클릭했는지 보고 
  
  SlideBanner(showI);

});
//  위 전체를 순환하는 기능을 만들어야 한다.

//  왼쪽 번튼을 클릭시 showI -1 이었던 아이를 leng-2 수치로 변경하여 , 해당위치로 이동하게 만들자.!






//  덤: 일정 시간마다 자동으로 순환하는 기능을 수행하게 만들자!

 // setinterval(function () { },1000); // 일정시간마다 동작하게 하는 함수 
 // clearInterval(function () { }); // setinterval을 강제로 멈추게 (setinterval을 삭제 )하는 함수 (외부에 전역번수를 써서 수행하게 해야됨 )

var movingSlide;  
var startMove= function () {  //수행을 하게되면 
  movingSlide= setInterval(function () { // 일정시간동안 수행해라 
    // console.log('go');
    nextBtn.trigger('click');
  },1000);
  // body...
};

var stopMove =function () {
  // body...
  clearInterval(movingSlide);  //수행하던 것을 멈춰라 
};
// banner.on({'mouseenter': startMove   ,'mouseleave':  stopMove      });

})(jQuery);