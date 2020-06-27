export default [
	{
		path: '/admin/login',
		name: 'login',
		component: () => import(/* webpackChunkName: login" */ './login.vue'),
	},
	{
		path: '/admin/dashboard',
		name: 'dashboard',
		component: () =>
			import(/* webpackChunkName: dashboard" */ './dashborad.vue'),
	},
];
