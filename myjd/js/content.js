$(function() {

   var mySwiper = new Swiper ('.swiper-container', {
  
    loop: true,
    
    // 如果需要分页器
    pagination: '.swiper-pagination',
 
  })        









	var i = 59,
		j = 59,
		k = 23;

	var timer = setInterval(function() {
		i--;
		if (i == 0) {
			i = 59
			j--;

			if (j == 0) {
				j = 59
				k--;
			}
		}

		$(".shi").html(k);
		$('.fen').html(j);
		$('.miao').html(i);

		$('.miaoqiang em a').each(function() {

			if (parseInt($(this).text()) < 10) {
				$(this).html('0' + $(this).text())
			}
        
         
		})
    
	},1000)
     
  
    
     
     
             	
            var  index=0;
			var  a=0;
			ajax();
			$(window).on('scroll',function(){
				
		     var scrollTop = $(window).scrollTop();
		        if (scrollTop>=300){
		                  	 
		     
			    	$(".search").css('background','rgba(209,56,68,0.8)');
			    
		        }else{
		        	$(".search").css('background','rgba(209,56,68,0.1)');
		        }
			   
			  
			
			
			
				var docHeight = $(document).height();

				
				var winHeight = $(window).height();
				
			
				if(scrollTop >= docHeight - winHeight){
					index++;
					
				 	
				 		ajax();
				 	
				   
				    
				}

			});
			
     	    
     function ajax(){
     	
            var isrc="img/col04-con.png";
     	    var src="http://img13.360buyimg.com/n1/s200x200_";
				var i = (index == 1) ? index : index * 20;
				$.ajax({
						url:'http://diviner.jd.com/diviner?p=610009&uuid=12396477&lid='+i+'&lim=20&cb=tempGuessLikeCallback',
						dataType:'jsonp',
						jsonp: 'callback',
						scriptCharset:'gb2312',
						jsonpCallback: 'tempGuessLikeCallback',
						success:function(res){
						    data = res.data;
					
				for (i=0;i<data.length;i++) {
				   				
					          var str=data[i].img;   	  
						         msrc=src+str;		  
				
					
					
		var html= '<div class="spzl"> <div class="spimg"><a href=""><img src="'+msrc+'"/></a></div><p class="title">'+data[i].t +'</p><p><span>￥'+data[i].jp+'</span> <input type="button" value="看相似" /> </p></div>'	
		$('.shoping').append(html)
		
	}
	          						
				    }
			
            });
       }
  
     
     $(window).resize(function(){
     	location.reload();            
     })
     
     
     
     
   })  