<style scoped>
	#one{
		background:black;
	}
	#up_ball,#down_ball{
		width:30vw;height:30vw;
		border-radius:15vw;
		background: white;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size:30px;
		font-weight: bold;
		transform-origin:50% 50%;
		position: relative;
	}
	#center_ball{
		font-size:30px;
		color:white;
		transform-origin:50% 50%;
		width:40vw;height: 40vw;
		border-radius:20vw;
		background: black;
		display: flex;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
	}
</style>
<template>
	<div id="one">
		<div id="up_ball">自然</div>
		<div id="center_ball">这里是</div>
		<div id="down_ball">人文</div>
	</div>
</template>
<script>
	const s = 100
	export default{
		data(){
			return {
				c:'',
				u:'',
				d:''
			}
		},
		ready(){
			this.origin_two()
		},
		methods:{
			origin_two(){
				this.c = jQuery('#center_ball')
				this.u = jQuery('#up_ball')
				this.d = jQuery('#down_ball')
				this.bg = jQuery('#one')
				this.d.css({
					opacity:0
				})
				this.u.css({
					opacity:0
				})
				this.begin()
			},
			begin(){
				this.c
				.transit({
					color:'black'
				},s*2)
				.transit({
					color:'white'
				},s*2)
				.transit({
					color:'black'
				},s*2)
				.transit({
					color:'white'
				},s*2)
				.transit({
					color:'black'
				},s*2)
				.transit({
					color:'white'
				},s*2,()=>{
					this.next_step()
				})
			},
			next_step(){
				this.u.transit({
					opacity:1
				},s*5,()=>{
					this.d.transit({
						opacity:1
					},s*5,()=>{
						this.combine()
					})
				})
			},
			combine(){
				this.u.transit({
					transform:"translate(0,200%) rotate(360deg)",
					opacity:0.3
				},s*10)
				this.d.transit({
					transform:"translate(0,-200%) rotate(360deg)",
					opacity:0.3
				},s*10,()=>{
					this.u.hide()
					this.d.hide()
					this.c
					.css({
						background:'white',
						color:'black'
					})
					.html('完美结合')
					this.t(3*s)
					.then(()=>{
						this.show_word()
					})
				})
			},
			show_word(){
				this.c
				.transit({
					transform:"translate(200%,0) rotate(360deg)"
				},s*10,()=>{
					this.c
					.html('')
					.css({
						background:'black',
						transform:"translate(0,0) rotate(0deg)",
						borderRadius:0,
						width:'100%',
						height:"20vw",
						fontSize:"22px"
					})
					this.show_nature()
				})
			},
			show_nature(){
				this.t(s*2)
				.then(()=>{
					this.c
					.css({
						background:'white'
					})
					return this.t(s*2)
				})
				.then(()=>{
					this.c
					.html("自")
					return this.t(s*1)
				})
				.then(()=>{
					this.c
					.css({
						color:'white',
						background:"black"
					})
					.html('自然')
					this.bg
					.css({
						background:'white'
					})
					return this.t(s*1)
				})
				.then(()=>{
					this.c
					.css({
						color:'black',
						background:"white"
					})
					.html('自然融')
					this.bg
					.css({
						background:'black'
					})
					return this.t(s*1)
				})
				.then(()=>{
					this.c
					.css({
						color:'white',
						background:"black"
					})
					.html('自然融入')
					this.bg
					.css({
						background:'white'
					})
					return this.t(s*1)
				})
				.then(()=>{
					this.c
					.css({
						color:'black',
						background:"white"
					})
					.html('自然融入的')
					this.bg
					.css({
						background:'black'
					})
					return this.t(s*2)
				})
				.then(()=>{
					this.c
					.html('人文生活')
					.css({
						fontSize:"80px"
					})
					.transit({
						fontSize:"20px"
					})
					return this.t(s*4)
				})
				.then(()=>{
					this.c
					.html('全新的')
					.css({
						fontSize:"80px"
					})
					.transit({
						fontSize:"20px"
					})
					return this.t(s*4)
				})
				.then(()=>{
					this.c
					.css({
						color:'white',
						background:"black"
					})
					.html('自')
					this.bg
					.css({
						background:'white'
					})
					return this.t(s*1)
				})
				.then(()=>{
					this.c
					.css({
						color:'black',
						background:"white"
					})
					.html('自由')
					this.bg
					.css({
						background:'black'
					})
					return this.t(s*1)
				})
				.then(()=>{
					this.c
					.css({
						color:'white',
						background:"black"
					})
					.html('自由生')
					this.bg
					.css({
						background:'white'
					})
					return this.t(s*1)
				})
				.then(()=>{
					this.c
					.css({
						color:'black',
						background:"white"
					})
					.html('自由生活')
					this.bg
					.css({
						background:'black'
					})
					return this.t(s*2)
				})
				.then(()=>{
					this.c
					.css({
						color:'white',
						background:"black"
					})
					.html('自由生活里')
					this.bg
					.css({
						background:'white'
					})
					return this.t(s*1)
				})
				.then(()=>{
					this.c
					.transit({
						height:"100vh"
					},s*15)
					.css({
						color:'black',
						background:"white"
					})
					.html('感知')
					this.bg
					.css({
						background:'black'
					})
					return this.t(s*3)
				})
				.then(()=>{
					this.c
					.css({
						color:'white',
						background:"black"
					})
					.html('王阳明')
					this.bg
					.css({
						background:'white'
					})
					return this.t(s*3)
				})
				.then(()=>{
					this.c
					.transit({
						fontSize:"60px"
					},s*3)
					.css({
						color:'black',
						background:"white"
					})
					.html('知行合一')
					this.bg
					.css({
						background:'black'
					})
					return this.t(s*3)
				})
				.then(()=>{
					this.bg
					.css({
						background:'white'
					})
					this.c
					.transit({
						x:"200%"
					},()=>{
						this.c
						.css({
							background:'black',
							color:'white',
							width:'40vw',
							height:'40vw',
							borderRadius:"20vw",
							fontSize:"30px",
							fontWeight:'bolder'
						})
						.html('心境')
						this.roll_in()
					})
				})
			},
			roll_in(){
				this.c
				.transit({
					transform:"translate(0,0) rotate(-360deg)"
				},s*10,()=>{
					this.final()
				})
			},
			final(){
				this.bg.css({
					background:"white"
				})
				this.c
				.transit({
					color:'black',
					fontSize:"60px",
					borderRadius:0,
					width:'100vw',
					height:"100vh"
				},s*10,()=>{
					this.$route.router.go({
						name:'two'
					})
				})
			},
			t(second){
				const p = new Promise((resolve,reject)=>{
					setTimeout(()=>{
						resolve(true)
					},second)
				})
				return p
			}
		}
	}
</script>