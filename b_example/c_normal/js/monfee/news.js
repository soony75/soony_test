//  news.js
(function ($) {
  // body...
  var news=$('.news');
  var newsCon=news.children('.container');



  // var newsList=$('.news_list');
var newsList = '<div class="news_list"><a href="#"><div class="img_list"></div><dl><dt>title</dt><dd>content</dd></dl></a></div>';
 // newsCon.append(newsList);
// 링크, 사진,  제목, 내용
var imgUrl="../../img/monfee/new_menu/";


// load(); 
// 동기식(직렬): 
/* 
비동기식 방식 (병렬)으로 처리되어 외부의 data를 불러오는 형식은 모두 
- A(비동기식 )J(자바스크립트)A(그리고)X(문서)
* AJAX
*/
// $.each()

var jsonDataUrl ="../../data/newsArray.json"
// $.ajax({type='get', async:false, url:jsonDataUrl});  //async(비동기) 동기화를 하지 않는다.  
//  제이슨 방식 : 자바스크립트 오브젝트 나열 방식 (객체형식으로 나열한 문법)

// var newsArray = [
//     {"link":"url_1", "pic":"menu_01.png", "tit":"title_a", "con":"content_1"},
//     {"link":"url_2", "pic":"menu_02.png", "tit":"title_b", "con":"content_2"},
//     {"link":"url_3", "pic":"menu_03.png", "tit":"title_c", "con":"content_3"},
//     {"link":"url_4", "pic":"menu_04.png", "tit":"title_d", "con":"content_4"},
//     {"link":"url_5", "pic":"menu_05.png", "tit":"title_e", "con":"content_5"},
//     {"link":"url_6", "pic":"menu_06.png", "tit":"title_f", "con":"content_6"},
//     {"link":"url_7", "pic":"menu_07.png", "tit":"title_g", "con":"content_7"}
//   ];
var newsArray = $.ajax({type:'get', async:false, url:jsonDataUrl}).responseJSON;
// console.log(go);

 var i=0,list; // list라는 임의 변수 만듬 
var AppendListMenu =function (i) {
  // body...
    newsCon.append(newsList);
    list = $('.news_list').eq(i);
    list.find('a').attr({ 'href': newsArray[i].link });
    list.find('.img_list').css({ 'backgroundImage': 'url(' + imgUrl + newsArray[i].pic + ')' });
    list.find('dt').text(newsArray[i].tit);
    list.find('dd').text(newsArray[i].con);
};


  for (; i < newsArray.length ; i += 1){
    AppendListMenu(i);
  }

})(jQuery);