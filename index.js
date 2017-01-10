import Vue from 'vue'
import Vue_Resource from 'vue-resource'
import Vue_Touch from 'vue-touch'
import Vue_Router from 'vue-router'
import App from './src/App'
import routes from './src/routes'

Vue.use(Vue_Resource)
Vue.use(Vue_Touch)
Vue.use(Vue_Router)

const router = new Vue_Router({
	mode:'hash'
})

router.map(routes)

router.start(App,'#app')

router.redirect({
	'*':'/'
})
