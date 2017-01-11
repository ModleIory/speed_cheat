<style scoped>
	#two{
		background:black;
	}
	#two img{
		width:100%;height: auto;
		display: none;
		transform-origin: 50% 50%;
		-webkit-transform-origin: 50% 50%;
	}
	#two p{
		width: 100%;
		min-height: 25vw;
		display: flex;
		justify-content: center;
		align-items: center;
		background: white;
		color:white;
		font-size:25px;
		font-weight: bolder;
		letter-spacing: 2px;
	}

</style>
<template>
	<div id="two">
		<img :src="img_url" id="photo_show">
		<p id="title">{{title}}</p>
	</div>
</template>
<script>
	const s=100
	export default{
		data(){
			return {
				img_url:"../../img/ymxy.jpg",
				title:'阳明小院',
				r:'',
				t:'',
				bg:""
			}
		},
		ready(){
			this.init()
		},
		methods:{
			init(){
				this.t = jQuery('#photo_show')
				this.r = jQuery('#title')
				this.bg = jQuery('#two')
				this.r.css({
					fontSize:"60px"
				})
				this.ti(s*5)
				.then(()=>{
					this.start()
				})
			},
			start(){
				this.r
				.css({
					color:'black'
				})
				.transit({
					fontSize:"22px"
				},s*5,()=>{
					this.r.hide()
					this.showPicOne()
				})
			},
			showPicOne(){
				this.t
				.show()
				.transit({
					scale:1.1
				},s*10,()=>{
					this.change_color()
					this.showPicTwo()
				})
			},
			showPicTwo(){
				this.t.hide()
				.attr('src',"../../img/hlj.jpg")
				.transit({
					scale:1
				})
				this.r
				.show()
				.html('何陋居')
				.transit({
					fontSize:"22px"
				},()=>{
					this.showPicTwo_()
				})
				
			},
			showPicTwo_(){
				this.r.hide()
				this.t
				.show()
				.transit({
					scale:1.1
				},s*10,()=>{
					this.change_color()
					this.showPicThree()
				})
			},
			showPicThree(){
				this.t.hide()
				.attr('src',"../../img/yxxz.jpg")
				.transit({
					scale:1
				})
				this.r
				.show()
				.html('原乡小筑')
				.transit({
					fontSize:"22px"
				},()=>{
					this.showPicThree_()
				})
				
			},
			showPicThree_(){
				this.r.hide()
				this.t
				.show()
				.transit({
					scale:1.1
				},s*10,()=>{
					this.change_color()
					this.showPicFour()
				})
			},
			showPicFour(){
				this.t.hide()
				.attr('src',"../../img/gxj.jpg")
				.transit({
					scale:1
				})
				this.r
				.show()
				.html('归乡居')
				.transit({
					fontSize:"22px"
				},()=>{
					this.showPicFour_()
				})
				
			},
			showPicFour_(){
				this.r.hide()
				this.t
				.show()
				.transit({
					scale:1.1
				},s*10,()=>{
					this.change_color()
					this.showPicFive()
				})
			},
			showPicFive(){
				this.t.hide()
				.attr('src',"../../img/sxcl.jpg")
				.transit({
					scale:1
				})
				this.r
				.show()
				.html('圣贤长廊')
				.transit({
					fontSize:"22px"
				},()=>{
					this.showPicFive_()
				})
				
			},
			showPicFive_(){
				this.r.hide()
				this.t
				.show()
				.transit({
					scale:1.1
				},s*10,()=>{
					this.change_color()
					this.showPicSix()
				})
			},
			showPicSix(){
				this.t.hide()
				.attr('src',"../../img/sqyy.jpg")
				.transit({
					scale:1
				})
				this.r
				.show()
				.html('石桥夜雨')
				.transit({
					fontSize:"22px"
				},()=>{
					this.showPicSix_()
				})
				
			},
			showPicSix_(){
				this.r.hide()
				this.t
				.show()
				.transit({
					scale:1.1
				},s*10,()=>{
					this.change_color()
					this.showPicSeven()
				})
			},
			showPicSeven(){
				this.t.hide()
				.attr('src',"../../img/srgz.jpg")
				.transit({
					scale:1
				})
				this.r
				.show()
				.html('守仁格竹')
				.transit({
					fontSize:"22px"
				},()=>{
					this.showPicSeven_()
				})
				
			},
			showPicSeven_(){
				this.r.hide()
				this.t
				.show()
				.transit({
					scale:1.1
				},s*10,()=>{
					this.change_color()
					this.showPicEight()
				})
			},
			showPicEight(){
				this.t.hide()
				.attr('src',"../../img/bxc.jpg")
				.transit({
					scale:1
				})
				this.r
				.show()
				.html('碧霞池')
				.transit({
					fontSize:"22px"
				},()=>{
					this.showPicEight_()
				})
				
			},
			showPicEight_(){
				this.r.hide()
				this.t
				.show()
				.transit({
					scale:1.1
				},s*10,()=>{
					this.change_color()
					this.end()
				})
			},
			end(){
				console.info('end')
			},
			change_color(){
				const bg = this.bg.css('backgroundColor')
				const content = this.r.css('backgroundColor')
				const color = this.r.css('color')
				console.info(bg,content,color)
				const new_bg = (bg=="rgb(0, 0, 0)"?'black':'black')
				const new_content = (content =="rgb(0, 0, 0)"?'white':'black')
				const new_color = (color =="rgb(0, 0, 0)"?'white':'black')
				console.log(new_bg,new_content,new_color)
				this.bg.css({
					background:new_bg
				})
				this.r.css({
					background:new_content,
					color:new_color,
					fontSize:"60px"
				})
			},
			ti(second){
				return new Promise((r,j)=>{
					setTimeout(()=>{
						r(true)
					},second)
				})
			}
		}
	}
</script>