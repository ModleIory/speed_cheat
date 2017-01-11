/*all self define component is here for re-user*/

!function($j,$z){
	music_switch()
	loading_two()
	// audioAutoPlay('audio')

	/*ONE music chapter*/
	function music_switch(){
		var audio = document.getElementById('audio')
		$j('#music_switch')
		.transit({
			rotate:Math.pow(10,1+9)*36+'deg'
		},Math.pow(10,3+9)*4,'linear')
		.on('click',function(){
			if($(this).attr('class')=='on'){
				$(this).removeClass('on')
				.addClass('off')
				.css('backgroundImage',"url(../../src/img/music-off.png)")
				audio.pause()
			}else{
				$(this).removeClass('off')
				.addClass('on')
				.css('backgroundImage',"url(../../src/img/music-on.png)")
				audio.play()
			}
		})
	}
	//ios微信不能自动播放
	function audioAutoPlay(id){  
		var audio = document.getElementById(id);  
		audio.play();  
		document.addEventListener("WeixinJSBridgeReady", function () {  
		        audio.play();  
		}, false);  
		document.addEventListener('YixinJSBridgeReady', function() {  
		        audio.play();  
		}, false);  
	} 
	/*NINE the loading two ---- rect dance*/
	function loading_two(){
		var can = document.getElementById('loading_two'),
			c = can.getContext('2d'),
			can_h = can.height,
			can_w = can.width,
			rect_w = 18,
			/*围绕转的圆圈的半径*/
			radius = 25,
			color = ['orange','pink','red','yellow','white','blue','purple','gray','black']
			//正方形计算左边靠的是左上角不像圆形一样是圆心
			origin_x = 0-rect_w/2
			rect_num = 4
			settle_x=0,settle_y=0,
			angle = 0,angle_v=(Math.PI)/62.5,
			scale=0,
			scale_v = (Math.PI)/62.5

			loop()
			function loop(){
				requestAnimationFrame(loop)
				c.clearRect(0,0,can_w,can_h)
				// c.fillStyle = 'black'
				// c.fillRect(0,0,can_w,can_h)
				draw()
				update()
			}
			function draw(){
				c.save()
				c.translate(can_w/2,can_h/2)
				//这里是画布转
				c.rotate(angle)
				for(var i=0;i<rect_num;i++){
					c.save()
					//为什么这里是位置角度也变自身角度也变?==>实际上也仅仅只是位置在变,倒是每个看起来都变了
					//实际上这里是每个单独的变化,只是轴心是上面translate了的,我需要的是沿着自己轴心,下面这句可以证明
					// if(i==0){
					// 	c.rotate(angle)
					// }
					c.beginPath()
					c.strokeStyle=color[i]
					c.fillStyle = color[i]
					settle_x = Math.round( Math.sin( (Math.PI/2) *i) )*radius 
					//纵坐标根据横坐标来,用圆形的公式,但是都为0时候,做坐标一样的,重复绘制了,要区分
					if(i==0){
						settle_y = -Math.sqrt( Math.pow(radius,2)-Math.pow( settle_x ,2) )
					}else{
						settle_y = Math.sqrt( Math.pow(radius,2)-Math.pow( settle_x ,2) )
					}
					//上面的translate使得其围绕中轴,这里的translate,使其围绕x,y,而非原地打转,有两个restore嘛
					c.translate(settle_x,settle_y)
					//这里是每个转
					c.rotate(angle)
					c.scale(1+0.2*Math.sin(scale),1+0.2*Math.sin(scale))
					c.rect( settle_x-rect_w/2,
						settle_y-rect_w/2,
						rect_w,
						rect_w
					)
					c.fill()
					c.stroke()
					c.closePath()
					c.restore()
				}
				c.restore()
			}
			function update(){
				angle += angle_v
				scale +=scale_v
			}
	}
}(jQuery,Zepto)