$(function(){
			var i=0;
			var clone=$('.imgbox li').first().clone();
			var iWidth=$('.imgbox li:eq(0)').width();
			$('.imgbox').append(clone);
           
			//图片li 的长度
			var size=$('.imgbox li').size();
//            $(".imgbox").width(size*iWidth)
              
			// 向左点击按钮
			$('.btn_l').click(function(){
				moveL();
			})

			// 向右点击按钮
			$('.btn_r').click(function() {
				moveR();
			});
           
           
           
//			//圆点hover，改变动画
//			$('.numbox li').hover(function(){
//				i=$(this).index();
//				$('.imgbox').stop().animate({left:-(1)*iWidth*i},500);
//				$(this).addClass('on').siblings().removeClass('on');
//			})

			var t=setInterval(moveL,4000)

			$('.banner').hover(function(){
				clearInterval(t)
			},function(){
				t=setInterval(moveL,4000);
			})

			function  moveL(){
				i++;
				// 当移动到最后一张，再移动的时候，回到第一张
				if(i==size){
					$('.imgbox').css({'left':'0px'});
					i=1;
				}
				//移动动画
				$('.imgbox').stop().animate({left:(-1)*iWidth*i},500);

				//圆点跟随添加样式on
				if(i==size-1){
					$('.numbox li').eq(0).addClass('on').siblings().removeClass('on');
				}else{
					$('.numbox li').eq(i).addClass('on').siblings().removeClass('on');
				}
		 	}
			function moveR(){
				i--;
				// 当移动到第一张，再移动的时候，回到最后一张
				if(i==-1){
					$('.imgbox').css('left',-(size-1)*iWidth);
					i=size-2;
				}
				//移动动画
				$('.imgbox').stop().animate({left:(-1)*iWidth*i},500);
				//圆点跟随添加样式on
				$('.numbox li').eq(i).addClass('on').siblings().removeClass('on');
			}
		})