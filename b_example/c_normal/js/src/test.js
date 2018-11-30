(function($)({
var indi    = $('.indicator li>a');
var banner = $('.product>ul');

indi.on('click', function(e){
  e.preventDefault( );
  var i = $(this).parent('li').index(); 선택되어진 
  var per = -i * 100;

  banner.css({marginLeft: per + '%'});

  indi.parent('li').removeClass('action'); li에 클라스action 지워라 
  indi.parent('li').eq( i ).addClass('action'); //eq(i)번째에 action을 추가해라
});
})(jQuery)
