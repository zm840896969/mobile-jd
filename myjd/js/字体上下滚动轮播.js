 $(function(){
 	

 var i=0;
			var clone=$('.zitilunbo li').first().clone();
			var iWidth=$('.zitilunbo li:eq(0)').height();
			$('.zitilunbo').append(clone);
           
			//图片li 的长度
			var size=$('.zitilunbo li').size();

function movetop(){
	

				i++;
				// 当移动到最后一张，再移动的时候，回到第一张
				if(i==size){
					$('.zitilunbo').css({'top':'0px'});
					i=1;
				}
				//移动动画
				$('.zitilunbo').stop().animate({top:(-1)*iWidth*i},500);

}

var t=setInterval(movetop,2000)

			$('section').hover(function(){
				clearInterval(t)
			},function(){
				t=setInterval(movetop,2000);
			})
 })			