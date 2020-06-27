import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import nivedan from './utils/nivedanConfig';
Vue.config.productionTip = false;
Vue.prototype.nivedan = nivedan;
new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');
