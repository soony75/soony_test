// selector_01.js

(function($){
// console.log('!!!');

// #wrap{width:60rem;height:auto;min-height:30rem;background-color:#ccc;marign:auto;}
var wrap= $('#wrap');
// var unit= 60;
$('#wrap').css({width:60+'rem',height:'auto',minHeight:30+'rem',backgroundColor:'#ccc',marign:'auto'});
// 'rgba('+255+','+255+','+255+','+0.5+')'

$('#headBox').css({margin:'auto',width:80+'%',height:'auto',textAlign:'center',backgroundColor:'#059',
  color:'#fff',paddingBottom:1+'rem',borderBottom:0.2+'rem solid #fff'});

var listBox=$('#list');
var listOuter=listBox.children('ul');
var listLi =listOuter.children('li');
var full = 100 + '%';
listBox.css({marign:'auto',width:full,height:'auto',backgroundColor:'#acf'});
listOuter.css({width:full,height:'auto',padding:5 +'rem ',boxSizing:'border-box', backgroundColor:'#fa7'});
listLi.css({width:full,height:1.5+'rem',textAlign:'center' ,paddingTop:'1rem' ,borderBottom:'0.2rem solid #333', });
// listOuter.children('li:nth-child(1)').css({ backgroundColor:'#aca' });
// listOuter.children('li:nth-child(2n)').css({ backgroundColor:'#fca' });
// listOuter.children('li:nth-child(3)').css({ backgroundColor:'#acf' });
// listOuter.children('li:nth(1)').css({ backgroundColor:'#aca' });
// listOuter.children('li').eq(-2).css({ backgroundColor:'#fca' });
// listOuter.children('li:eq(2)').css({ backgroundColor:'#acf' });

var color1 = [ '#fff', '#ccc','#acf','#f06','#47a' ];
var colorLen =color1.length;
var listLiLen = listLi.length;
console.log(listLi);
// for(var i=0; i<=4; i++ ){
//   listLi.eq(i).css ({backgroundColor:color1[i] });
 
// }
//listLi.eq(i).css ({backgroundColor:color1[0] });

// var i=0
// for(; i<listLiLen; i+=1 ){
//   listLi.eq(i).css ({backgroundColor:color1[i] });
 
// }

// Jquery 선택자
// 직접 선택하는방법, id, class $()
//    - $(''),$('div')
// // 메소드를 활용하는 방법, children, find
//  -$('div>ul>a')일 경우
//  $('div').children('ul');
//  $('div').find('a');

// 순서를 선택하는 방법에서는 :nth:child , eq
 // $('li').eq(1) //순서는 처음 0(css선택에서는 1부터)
 // 부모를 선택하는 방법, parent()
 // $(' #wrap')

 // 형재를 선택하는 방법, siblings, next  prew, nexAll, prevAll

 $('li').parentsUntil('#wrap').css({height:'100rem', backgroundColor:'#f6a'});
 

  $('li').eq(2).siblings().css({marginLeft:'3rem'});
 $('li').eq(2).prev().css({textIndent:'-5rem'});
 $('li').eq(2).next().css({textIndent:'-5rem'});
 $('li').eq(2).nextAll().css({color:'#ff6'});
 $('li').eq(2).prevAll().css({color:'#0a7'});


})(jQuery);


