export default [
	{
		path: '/',
		name: 'home',
		component: () => import(/* webpackChunkName: login" */ './home.vue'),
	},
	{
		path: '/about-us',
		name: 'aboutus',
		component: () => import(/* webpackChunkName: dashboard" */ './about.vue'),
	},
	{
		path: '/contact-us',
		name: 'contact-us',
		component: () =>
			import(/* webpackChunkName: dashboard" */ './contactus.vue'),
	},
];
