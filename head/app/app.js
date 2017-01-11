/*begin your code*/
~function($j,$z){
	/*self define page container*/
	var app = {
		second_page_count:0,
		init:function(){
			this.fullpage()
			setTimeout(function(){
				$j('#loading').hide()
				app.begin()
				$j('#arrow').show()
				app.arrow()
			},3000)
		},
		fullpage:function(){
			$z('.pages').fullpage({
				/*page class self define name*/
				page:'.each',
				start:0,
				duration:100,
				drag:true,
				loop:true,
				dir:'v',
				change:function(e){
					console.warn('change')
					// console.info(e)
					$('.each').eq(e.cur).find('.js-animate').each(function() {
            					$(this).removeClass($(this).data('animate')).hide()
            				})
				},	
				beforeChange:function(e){
					console.warn('beforechange')
					// console.info(e)
				},
				afterChange:function(e){
					console.warn('afterchange')
					$('.each').eq(e.cur).find('.js-animate').each(function () {
			                        	$(this).addClass($(this).data('animate')).show()
			            	})
					console.info(e)
					//和打字机一起限制从新到第一页回来时候第二页的显示
					if(app.second_page_count!=0){
						$('.each2 img').hide()
					}
					//打字机
					if(e.cur==1 && e.prev==0 && app.second_page_count==0){
						setTimeout(function(){
							var cur_div = document.createElement('div')
							cur_div.setAttribute('id','typing_box')
							$('.each2')[0].appendChild(cur_div)
							var text = "青年们，|你感觉这种苦痛吗？|你发现这种危险吗？|我告诉你，|唯一的救济法门，|就是依着王阳明知|行合一之教做去%——梁启超"
							$('.each2 img').hide()
							app.typing(cur_div,text)
						},3000)
						app.second_page_count++
					}
					//滑动回来的时候
					if(e.prev==2 && e.cur ==1){
						$('.each2 img').hide()
					}
				},
				orientationchange:function(e){
					console.warn('orientationchange')
					// console.info(e)
				}
			})
		},
		arrow:function(){
			$('#arrow').transit({
				y:20,
				opacity:1
			},10,'ease').transit({
				y:-10,
				opacity:0
			},2000,'linear',function(){
				app.arrow()
			}).show()
		},
		typing:function(selector,text){
			// var selector = $j(selector)[0]
			var _node = document.createTextNode('_')
			var arr = text.split('')
			var len = arr.length
			var cur_node
			var count = 0
			var c = setInterval(function(){
				var cur_text = arr.shift()
				if(cur_text=='|'){
					cur_node = document.createElement('br')
					selector.appendChild(cur_node)
				}else if(cur_text=='%'){
					cur_node = document.createTextNode('  ')
					selector.appendChild(cur_node)
				}else{
					cur_node = document.createTextNode(cur_text)
					selector.appendChild(cur_node)
					selector.appendChild(_node)
				}
				count++
				if(count==len){
					clearInterval(c)
				}
			},150)

		},
		begin:function(){
			$j('#begin').on('click',function(){
				window.location.href = '/#!/one'
			})
		},
		js_handle:function(){
			//movePrev
			$z.fn.fullpage.moveNext(true)
			//get cur page index like array format
			$z.fn.fullpage.getCurIndex()
			//stop touch move
			$z.fn.fullpage.stop()
		}
	}
	window.$z = $z
	window.$j = $j
	app.init()
}(jQuery,Zepto)