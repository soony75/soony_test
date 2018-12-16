//  main_01.js

(function($){
var aUrl = './commonBox/';
var homeBox = $('#homeBox');
var headBox = $('#headBox');
var footBox = $('#footBox');
// load() 메소드는 반드시 무조건 꼭 제발 서버로 구도되어야만 동작한다.
// 외부에 존재하는 문서를 부러와서 담는 기능
//  html 문서의 경우 기준 상대경로는 삽입하려고 하는 문서(html)를 기준으로 한다.


homeBox.load(aUrl + 'homeBox.html');
headBox.load(aUrl + 'headBox.html');
footBox.load(aUrl + 'footbox.html');


})(jQuery);