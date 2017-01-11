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
				// bg:"",
				// circle_bg:"",
				// content:"",
				bg:{
					background:'white'
				},
				circle_bg:{
					background:"black",
					color:"whtie",
					fontSize:"80px"
				},
				content:"即刻",
				ri:"",
				_bg:"",
			}
		},
		ready(){
			this.origin_action()
		},
		computed:{
			// ...mapState([
			// 	"bg",
			// 	"circle_bg",
			// 	"content",
			// 	"s"
			// ])
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
					.html('开启')
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
				this.ri.html('开启一段')
				this.time(s*2)
				.then(()=>{
					this.ri.html('开启一段通往')
					return this.time(s*3)
				})
				.then(()=>{
					this.ri.html('心灵的')
					return this.time(s*3)
				})
				.then(()=>{
					this.ri
					.transit({
						fontSize:"40px"
					},4*s)
					.transit({
						color:'white'
					},s).transit({
						color:'black'
					},s).transit({
						color:'white'
					},s).transit({
						color:'black'
					},s)
					return this.time(s*10)
				})
				.then(()=>{
					this.ri.html('自由之路!!')
					return this.time(s*5)
				})
				.then(()=>{
					this.ri
					.css({fontSize:"80px"})
					.html('桃花')
					.css({fontSize:"22px"})
					return this.time(s*3)
				})
				.then(()=>{
					this.ri
					.css({fontSize:"80px"})
					.html('秘境')
					.css({fontSize:"22px"})
					return this.time(s*3)
				})
				.then(()=>{
					this._bg.css({
						background:"white"
					})
					this.ri
					.css({fontSize:'80px'})
					.html('桃花秘境')
					.transit({
						fontSize:"22px"
					},s*5)
					return this.time(s*5)
				})
				.then(()=>{
					this.ri
					.css({
						fontSize:"50px",
						background:'black',
						color:'white'
					})
					.html('桃花秘境中的')
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
					.html('第')
					return this.time(s*3)
				})
				.then(()=>{
					this._bg.css('background',"black")
					this.ri
					.html('')
					.css('background','white')
					.css('fontSize','40px')
					.css('color','black')
					.html('二')
					return this.time(s*3)
				})
				.then(()=>{
					this.ri
					.html('')
					.css('background','black')
					.css('fontSize','70px')
					.css('color','white')
					.html('人')
					.transit({
						fontSize:'25px'
					},s*3)
					return this.time(s*3)
				})
				.then(()=>{
					this.ri
					.html('')
					.css('background','white')
					.css('fontSize','70px')
					.css('color','black')
					.html('生')
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
					.html('第二人生!!!')
					.transit({
						fontSize:'25px'
					},s*3)
					return this.time(s*3)
				})
				.then(()=>{
					this.ri
					.transit({
						background:'white',
						color:'black',
						fontSize:"30px"
					},s*1)
					.transit({
						background:'black',
						color:'white',
						fontSize:"35px"
					},s*1)
					.transit({
						background:'white',
						color:'black',
						fontSize:"40px"
					},s*1)
					.transit({
						background:'black',
						color:'white',
						fontSize:"45px"
					},s*1)
				})
				.then(()=>{
					this.time(s*5)
					.then(()=>{
						this.two_action()
					})
				})

			},
			two_action(){
				// alert('two action!!')
				this.$route.router.go({
					name:"two"
				})
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