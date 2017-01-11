<style>
	*{
		margin:0;padding:0;
		font-family:"微软雅黑";
	}
	body,html{
		background:black;
		width:100vw;height: 100vh;
	}
	#app>div{
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: space-around;
		align-items: center;
		width:100vw;height: 100vh;
		max-width: 640px;
		max-height: 1138px;
	}
</style>
<template>
	<div>
		<router-view></router-view>
	</div>
</template>
<script>
	import store from "./store"
	export default{
		store
	}
</script>