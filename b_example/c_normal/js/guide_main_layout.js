// guide_main_layout.js
(function ($) {
  // 분리된 html문서를 불러와서 합치기 
  //  * 기준 html문서를 기준으로 불러와야함!!
  //  * 반드시 서버가 동작해야 함!! 
  // 1.header#headBox생성 및 header.html불러오기
 // console.log('!!!!');
var wrap=$('#wrap');
var allUrl= './monfeeall/';


wrap.prepend('<header id="headBox"></header>');
var headBox =$('#headBox');
  // body...

// var link =function(file, url, fileName){
// //  if(file){var f =file; } else{ var f ='header';}

// var f =file  || 'header';
// var u =url || allUrl;
// var fn = fileName || '.html';

// var result = u+f+fn;
// console.log(result);
// return result; 

// };

headBox.load(allUrl + 'header.html');

// 2. section#adBanner를 생성하여 불러오기 

headBox.after('<section id="adBanner"></section>')
var adBanner= $('#adBanner');
var mainUrl= './main/';
adBanner.load(mainUrl+ 'adBanner.html');

//  news.html
var bestNews =$('#bestNews');
bestNews.children('h2').after('<div class="news"></news>');
$('.news').load(mainUrl + 'news.html' );

//  issueText.html
bestNews.children('.news').after('<div class="issue_text"></div>');
$('.issue_text').load(mainUrl + 'issueText.html');


})(jQuery);