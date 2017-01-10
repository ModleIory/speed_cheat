/*this part is normal bg and circle text change*/
<style scoped>
	.circle{
		width:70vw;
		height:70vw;
		border-radius: 35vw;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: bolder;
		color:white;
		font-family: "微软雅黑";
		overflow: hidden;
		position: relative;
	}
</style>
<template>
	<div id="one" :style="bg">
		<div class="circle" :style="circle_bg">
			{{content}}
		</div>
	</div>
</template>
<script>
	import {mapState,mapActions} from 'vuex'
	const s = 100
	export default{
		data(){
			return {
				bg:"",
				circle_bg:"",
				content:"",
				ri:"",
				_bg:"",
			}
		},
		ready(){
			this.origin_action()
		},
		computed:{
			...mapState([
				"bg",
				"circle_bg",
				"content",
				"s"
			])
		},
		methods:{
			origin_action(){
				this.ri = jQuery('.circle')
				this._bg = jQuery('#one')
				this.ri.css({
					scale:0.2,
					left:"-200px",
					rotate:"-360deg"
				})
				.transit({
					left:"0px",
					rotate:"0deg"
				},s*20)
				.transit({
					delay:s*1,
					scale:1
				},s*4,()=>{
					this.ri
					.css({
						background:"white",
						color:"black"
					})
					.html('想')
					this._bg.css('background','black')
					this.one_action()
				})

			},
			one_action(){
				this.ri.transit({
					delay:s*5,
					fontSize:"22px"
				},s*5,'ease',()=>{
					this.change_word()
				})
			},
			change_word(){
				this.ri.html('想知')
				this.time(s*2)
				.then(()=>{
					this.ri.html('想知道')
					return this.time(s*3)
				})
				.then(()=>{
					this.ri.html('想知道他们')
					return this.time(s*3)
				})
				.then(()=>{
					this.ri
					.css({fontSize:"80px"})
					.html('在')
					.css({fontSize:"22px"})
					return this.time(s*3)
				})
				.then(()=>{
					this.ri
					.css({fontSize:'80px'})
					.html('哪儿')
					.transit({
						fontSize:"22px"
					},s*5)
					return this.time(s*5)
				})
				.then(()=>{
					this.ri
					.css({fontSize:"50px"})
					.html('在哪儿吗?!?!')
					.transit({
						fontSize:"22px"
					})
					return this.time(s*5)
				})
				.then(()=>{
					this._bg.css('background',"white")
					this.ri
					.html('')
					.css('background','black')
					.css('fontSize','40px')
					.css('color','white')
					.html('接下来')
					return this.time(s*3)
				})
				.then(()=>{
					this._bg.css('background',"black")
					this.ri
					.html('')
					.css('background','white')
					.css('fontSize','40px')
					.css('color','black')
					.html('带你')
					return this.time(s*3)
				})
				.then(()=>{
					this.ri
					.html('')
					.css('background','black')
					.css('fontSize','70px')
					.css('color','white')
					.html('去')
					.transit({
						fontSize:'25px'
					},s*3)
					return this.time(s*3)
				})
				.then(()=>{
					this.ri
					.html('')
					.css('background','black')
					.css('fontSize','70px')
					.css('color','white')
					.html('找')
					.transit({
						fontSize:'25px'
					},s*3)
					return this.time(s*3)
				})
				.then(()=>{
					this.ri
					.html('')
					.css('background','black')
					.css('fontSize','70px')
					.css('color','white')
					.html('去找寻!!!')
					.transit({
						fontSize:'25px'
					},s*3)
					return this.time(s*3)
				})
				.then(()=>{
					this.two_action()
				})

			},
			two_action(){
				alert('two action!!')
			},
			time(s){
				const defer = $.Deferred()
				setTimeout(()=>{
					defer.resolve(true)
				},s)
				return defer.promise()
			}
		}
	}
</script>