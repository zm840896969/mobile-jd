$(function(){
			var i=0;
			var clone=$('.mimgbox li').first().clone();
			var iWidth=$('.mimgbox li:eq(0)').width();
			$('.mimgbox').append(clone);
           
			//图片li 的长度
			var size=$('.mimgbox li').size();
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

			var t=setInterval(moveL,2000)

			$('.banner').hover(function(){
				clearInterval(t)
			},function(){
				t=setInterval(moveL,2000);
			})

			function  moveL(){
				i++;
				// 当移动到最后一张，再移动的时候，回到第一张
				if(i==size){
					$('.mimgbox').css({'left':'0px'});
					i=1;
				}
				//移动动画
				$('.mimgbox').stop().animate({left:(-1)*iWidth*i},500);

				//圆点跟随添加样式on
				if(i==size-1){
					$('.mnumbox li').eq(0).addClass('on').siblings().removeClass('on');
				}else{
					$('.mnumbox li').eq(i).addClass('on').siblings().removeClass('on');
				}
		 	}
			function moveR(){
				i--;
				// 当移动到第一张，再移动的时候，回到最后一张
				if(i==-1){
					$('.mimgbox').css('left',-(size-1)*iWidth);
					i=size-2;
				}
				//移动动画
				$('.mimgbox').stop().animate({left:(-1)*iWidth*i},500);
				//圆点跟随添加样式on
				$('.mnumbox li').eq(i).addClass('on').siblings().removeClass('on');
			}
		})