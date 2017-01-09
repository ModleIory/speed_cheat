const webpack = require('webpack')
const path = require('path')

const root = __dirname

module.exports = {
	entry:{
		index:path.resolve(root,'index.js')
	},
	output:{
		filename:"[name].bundle.js",
		path:path.resolve(root,'dest')
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:'babel'
			},
			{
				test:/\.css$/,
				loader:'style!css'
			},
			{
				test:/\.vue$/,
				loader:'vue'
			},
			{
				test:/\.(png)|(jpg)|(jpeg)|(gif)$/,
				loader:'url?limit='+1024*100
			},
			{
				test:/\.(png|jpg|jpeg|gif|mp4|mp3)$/,
				loader:"file"
			},
		]
	},
	devServer:{
		port:8787,
		contentBase:'./'
	},
	resolve:{
		extensions:['','.css','.js','.vue'],
		alias:{
			'vue$':'vue/dist/vue.common.js'
		}
	},
	plugins:[

	],
	externals:{

	}
}